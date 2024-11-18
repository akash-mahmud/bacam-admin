import React, { useCallback, useContext, useState } from 'react';

import { useFormik } from 'formik';

import { notification, Spin } from 'antd';
import Card, { CardBody } from '@/components/bootstrap/Card';

import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import {
	useCreateOneProductMutation,
	ProductType,
	CustomProductStatus,
} from '@/graphql/generated/schema';

import AuthContext from '@/context/authContext';

import ProductForm from '@/common/partial/product/ProductForm';
export const uploadButton = (
	<>
		+<div style={{ marginTop: 8 }}>Upload</div>
	</>
);
export default function index() {
	const formik = useFormik({
		enableReinitialize: true,

		initialValues: {
			name: '',
			description: '',
			slug: '',
			shortdescription: '',
			employee: '',
			images: [],
			type: ProductType.Custom,
			custom_product_status: CustomProductStatus.Started,
			minimumOrderNeededToStart: 0,
			category: {
				connect: {
					id: '',
				},
			},
			price: 0, 
			orderStartPrice: 0,
			stock: 0,
			fetauresCategories: {
				connect: [],
			},
			fetaures: {
				createMany: {
					data: [
					
					],
				},
			},
		},

		validateOnChange: false,

		onSubmit: async (values) => {
			await createProduct(values as any);
		},
	});
	const [CreateProduct, { loading }] = useCreateOneProductMutation();
	const { user, authorize } = useContext(AuthContext);
	const [files, setFiles] = useState<any[]>([]);

	const createProduct = useCallback(
		async (data: any) => {
			if (data.type === ProductType.ReadyMate && !data.employee) {
				notification.error({
					message: 'Please select employee for your readymate product',
				});
				return;
			}
			if (data.type === ProductType.Custom && !data.orderStartPrice) {
				notification.error({
					message: "Order start price can't be 0 for custom product",
				});
				return;
			}
			try {
				const { data: res } = await CreateProduct({
					variables: {
						data: {
							...data,
							images: {
								set: data.images,
							},
							price: parseFloat(String(data.price)),
							stock: parseFloat(String(data.stock)),
							orderStartPrice: parseFloat(String(data.orderStartPrice)),
							minimumOrderNeededToStart: parseFloat(
								String(data.minimumOrderNeededToStart),
							),
							employee: data?.employee
								? {
										connect: {
											id: data?.employee,
										},
								  }
								: undefined,
						},
					},
				});

				if (res?.createOneProduct.id) {
					notification.success({
						message: 'Created',
					});
					formik.resetForm();
					setFiles([]);
				} else {
					notification.error({
						message: 'Something went wrong',
					});
				}
			} catch (error) {
				notification.error({
					message: 'Something went wrong',
				});
			}
		},
		[user],
	);
	return (
		<PageWrapper>
			<div>
				<Card stretch>
					<CardBody>
						<Spin spinning={loading}>
							<ProductForm formik={formik} files={files} setFiles={setFiles} />
						</Spin>
					</CardBody>
				</Card>
			</div>
		</PageWrapper>
	);
}
