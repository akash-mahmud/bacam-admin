import ProductForm from '@/common/partial/product/ProductForm';
import {
	CustomProductStatus,
	Product,
	ProductFetaure,
	ProductType,
	useProductForUpdateLazyQuery,
	useProductForUpdateQuery,
	useUpdateOneProductFetaureMutation,
	useUpdateOneProductMutation,
} from '@/graphql/generated/schema';
import { message, Spin } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { getImage } from '@/utils/getImage';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '@/components/bootstrap/Card';
import Button from '@/components/bootstrap/Button';

export default function page() {
	const router = useRouter();
	const [LoadProduct, { loading: loadProductLoading, data: SingelProductData }] =
		useProductForUpdateLazyQuery();
	const [UpdateOneProductFetaure, { loading: UpdateOneProductFetaureLoading }] =
		useUpdateOneProductFetaureMutation();

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
			fetauresCategories: {
				connect: [],
			},
			sizes: {
				set: [],
			},
			fetaures: {
				createMany: {
					data: [],
				},
			},
		},

		validateOnChange: false,

		onSubmit: async (values) => {
			await updateProduct(values as any);
		},
	});
	const [UpdateOneProduct, { loading }] = useUpdateOneProductMutation();
	const [files, setFiles] = useState<any[]>([]);

	const updateProduct = useCallback(
		async (data: any) => {
			if (data.type === ProductType.ReadyMate && !data.employee) {
				message.error('Please select employee for your readymate product');
				return;
			}

			if (data.type === ProductType.Custom && !data.orderStartPrice) {
				message.error("Order start price can't be 0 for custom product");
				return;
			}
			const dataDeepCopy = JSON.parse(JSON.stringify(data));
			delete dataDeepCopy.fetauresCategories;
			delete dataDeepCopy.fetaures;
			const formattedData = { ...dataDeepCopy } as any;
			Object.keys(dataDeepCopy).map((key) => {
				if (key === 'category' || key === 'employee') {
					return;
				}
				// @ts-ignore
				formattedData[key] = {
					// @ts-ignore
					set: dataDeepCopy[key],
				};
			});
			const oldFetaures = data?.fetaures?.createMany?.data?.filter((item2: { id: string }) =>
				SingelProductData?.product?.fetaures.some((item1) => item1.id === item2.id),
			) as ProductFetaure[];
			const newFetaures = data?.fetaures?.createMany?.data?.filter(
				(item2: { id: string }) =>
					!SingelProductData?.product?.fetaures.some((item1) => item1.id === item2.id),
			) as ProductFetaure[];

			let promisesForUpdateFetaures: Promise<any>[] = [];
			for (let index = 0; index < oldFetaures.length; index++) {
				const element = oldFetaures[index];
				promisesForUpdateFetaures = [
					...promisesForUpdateFetaures,
					UpdateOneProductFetaure({
						variables: {
							where: {
								id: element.id,
							},
							data: {
								name: {
									set: element.name,
								},
								value: {
									set: element.value,
								},
							},
						},
					}),
				];
			}

			await Promise.all(promisesForUpdateFetaures);
			formattedData['fetaures'] = {
				createMany: {
					data: newFetaures,
				},
			};
			console.log(formattedData);

			try {
				const { data: res } = await UpdateOneProduct({
					variables: {
						where: {
							id: router.query?.id as string,
						},
						data: {
							...formattedData,
							sizes: {
								set: data.sizes.set,
							},
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
					message.success('Updated');
					formik.resetForm();
					setFiles([]);
					router.push('/product');
				} else {
					message.error('Something went wrong');
				}
			} catch (error) {
				message.error('Something went wrong');
			}
		},
		[router.query?.id, loadProductLoading],
	);
	const updatedataLoad = async () => {
		const { data } = await LoadProduct({
			variables: {
				where: {
					id: router.query?.id as string,
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

			fetauresCategories: {
				connect: productData?.fetauresCategories,
			},
			sizes: {
				set: productData?.sizes,
			},
			fetaures: {
				createMany: {
					data: productData?.fetaures,
				},
			},
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
	useEffect(() => {
		updatedataLoad();
	}, [router.query?.id]);

	return (
		<PageWrapper>
			<div>
				<Card stretch>
					<CardBody>
						<Spin
							spinning={
								loadProductLoading || UpdateOneProductFetaureLoading || loading
							}>
							<ProductForm
								formik={formik}
								setFiles={setFiles}
								files={files}
								update={true}
							/>
							<div className='row m-0 justify-content-end'>
								<div className='col-2 p-3'>
									<Button
										color='info'
										className='w-100'
										onClick={formik.handleSubmit}>
										Update
									</Button>
								</div>
							</div>
						</Spin>
					</CardBody>
				</Card>
			</div>
		</PageWrapper>
	);
}
