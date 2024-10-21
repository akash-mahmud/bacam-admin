import React, { useCallback, useContext, useState } from 'react';
import type { NextPage } from 'next';

import Card, { CardBody } from '@/components/bootstrap/Card';

import Icon from '@/components/icon/Icon';

import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';

import {
	CustomProductStatus,
	ProductType,
	SortOrder,
	useProductForUpdateLazyQuery,
	useProductsQuery,
	useUpdateOneProductMutation,
} from '@/graphql/generated/schema';
import ProductTableRow from '@/common/partial/ProductTableRow';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '@/components/bootstrap/OffCanvas';
import { notification, Spin } from 'antd';
import ProductForm from '@/common/partial/product/ProductForm';
import AuthContext from '@/context/authContext';
import { useFormik } from 'formik';
import Button from '@/components/bootstrap/Button';
import { getImage } from '@/utils/getImage';
import { v4 } from 'uuid';
const Index: NextPage = () => {
	const [LoadProduct, { loading: loadProductLoading }] = useProductForUpdateLazyQuery();
	const [updateId, setupdateId] = useState('');
	const formik = useFormik({
		enableReinitialize: true,

		initialValues: {
			name: '',
			description: '',
			shortdescription: '',
			stock: 0,
			images: [],
			type: ProductType.Custom,
			custom_product_status: CustomProductStatus.Started,
			minimumOrderNeededToStart: 0,
			category: {
				connect: {
					id: '',
				},
			},
			employee: '',
			price: 0,
			orderStartPrice: 0,
		},

		validateOnChange: false,

		onSubmit: async (values) => {
			await updateProduct(values as any);
		},
	});
	const [UpdateOneProduct, { loading }] = useUpdateOneProductMutation();
	const { user, authorize } = useContext(AuthContext);
	const [files, setFiles] = useState<any[]>([]);
	const [updateCanvas, setupdateCanvas] = useState(false);
	const openUpdateCanvas = async (id: string) => {
		setupdateCanvas(true);
		setupdateId(id);
		const { data } = await LoadProduct({
			variables: {
				where: {
					id,
				},
			},
			fetchPolicy: 'network-only',
		});
		const productData = data?.product;

		const initSate = {
			name: productData?.name,
			description: productData?.description,
			images: productData?.images,
			type: productData?.type,
			custom_product_status: productData?.custom_product_status,
			minimumOrderNeededToStart: productData?.minimumOrderNeededToStart,
			shortdescription: productData?.shortdescription,
			stock: productData?.stock,

			category: {
				connect: {
					id: productData?.categoryId,
				},
			},
			price: productData?.price,
			orderStartPrice: productData?.minimumOrderNeededToStart,
			employee: productData?.employeeId,
		};
		formik.setValues(initSate as any);
		const formattedImage =
			productData?.images?.map((img) => ({
				status: 'done',
				uid: v4(),
				name: img,
				url: getImage(img),
			})) ?? [];
		setFiles(formattedImage);
	};
	const closeUpdateCanvas = (arg: boolean) => {
		setupdateCanvas(arg);
		formik.resetForm();
		setFiles([]);
	};

	const updateProduct = useCallback(
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
			const formattedData = { ...data } as any;
			Object.keys(data).map((key) => {
				if (key === 'category' || key === 'employee') {
					return;
				}
				// @ts-ignore
				formattedData[key] = {
					// @ts-ignore
					set: data[key],
				};
			});

			try {
				const { data: res } = await UpdateOneProduct({
					variables: {
						where: {
							id: updateId,
						},
						data: {
							...formattedData,
							employee: data?.employee
								? {
										connect: {
											id: data?.employee,
										},
								  }
								: undefined,
							images: {
								set: data.images,
							},
							price: {
								set: parseFloat(String(data.price)),
							},
							orderStartPrice: {
								set: parseFloat(String(data.orderStartPrice)),
							},
							minimumOrderNeededToStart: {
								set: parseFloat(String(data.minimumOrderNeededToStart)),
							},
							stock: {
								set: parseFloat(String(data.stock)),
							},
						},
					},
				});

				if (res?.updateOneProduct?.id) {
					notification.success({
						message: 'Updated',
					});
					formik.resetForm();
					setFiles([]);
					refetch();
					closeUpdateCanvas(false);
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
		[updateId],
	);

	const { data, refetch } = useProductsQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const products = data?.products ?? [];
	return (
		<PageWrapper>
			<Page>
				<Card stretch data-tour='list'>
					<CardBody className='table-responsive' isScrollable>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th
										scope='col'
										className='cursor-pointer text-decoration-underline'>
										Price <Icon size='lg' icon='FilterList' />
									</th>
									<th scope='col'>type</th>
									<th scope='col'>stock</th>
									<th scope='col'>minimumOrderNeededToStart</th>
									<th scope='col'>custom_product_status</th>
									<th scope='col'>orderStartPrice</th>

									<th scope='col' className='text-end'>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((i) => (
									// @ts-ignore
									<ProductTableRow
										openUpdateCanvas={openUpdateCanvas}
										key={i.id}
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...i}
										selectName='selectedList'
									/>
								))}
							</tbody>
						</table>
					</CardBody>
				</Card>
				<OffCanvas
					setOpen={closeUpdateCanvas}
					isOpen={updateCanvas}
					titleId='upcomingEdit'
					isBodyScroll
					placement='end'>
					<OffCanvasHeader setOpen={closeUpdateCanvas}>
						<OffCanvasTitle id='upcomingEdit'>Edit Categories</OffCanvasTitle>
					</OffCanvasHeader>
					<OffCanvasBody>
						<Spin spinning={loadProductLoading}>
							<ProductForm
								rowClassName='col-md-12'
								formik={formik}
								setFiles={setFiles}
								files={files}
								update={true}
							/>
						</Spin>
					</OffCanvasBody>
					<div className='row m-0'>
						<div className='col-12 p-3'>
							<Button color='info' className='w-100' onClick={formik.handleSubmit}>
								Save
							</Button>
						</div>
					</div>
				</OffCanvas>
			</Page>
		</PageWrapper>
	);
};

export default Index;
