import React, { useCallback, useContext, useState } from 'react';
import type { NextPage } from 'next';


import Card, { CardBody } from '@/components/bootstrap/Card';

import Icon from '@/components/icon/Icon';

import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';

import { CustomProductStatus, ProductType, SortOrder, useCreateOneProductMutation, useProductForUpdateLazyQuery, useProductsQuery } from '@/graphql/generated/schema';
import ProductTableRow from '@/common/partial/ProductTableRow';
import OffCanvas, { OffCanvasHeader, OffCanvasTitle, OffCanvasBody } from '@/components/bootstrap/OffCanvas';
import { notification, Spin } from 'antd';
import ProductForm from '@/common/partial/product/ProductForm';
import AuthContext from '@/context/authContext';
import { useFormik } from 'formik';
import Button from '@/components/bootstrap/Button';
import { getImage } from '@/utils/getImage';
import { v4 } from 'uuid';





const Index: NextPage = () => {

	const [LoadProduct, { loading: loadProductLoading }] = useProductForUpdateLazyQuery()

	const formik = useFormik({
		enableReinitialize: true,

		initialValues: {
			name: '',
			description: '',
			slug: '',
			images: [],
			type: ProductType.Custom,
			custom_product_status: CustomProductStatus.Started,
			minimumOrderNeededToStart: 0,
			category: {
				connect: {
					id: ""
				}
			},
			price: 0,
			orderStartPrice: 0,



		},

		validateOnChange: false,

		onSubmit: async (values) => {



			await createProduct(values as any);


		},
	});
	const [CreateProduct, { loading }] = useCreateOneProductMutation()
	const { user, authorize } = useContext(AuthContext)
	const [files, setFiles] = useState<any[]>([]);
	const [updateCanvas, setupdateCanvas] = useState(false)
	const openUpdateCanvas = async (id: string) => {
		setupdateCanvas(true)

		const { data } = await LoadProduct({
			variables: {
				where: {
					id
				}
			}
		})
		const productData = data?.product

		const initSate = {
			name: productData?.name,
			description: productData?.description,
			slug: productData?.slug,
			images: productData?.images,
			type: productData?.type,
			custom_product_status: productData?.custom_product_status,
			minimumOrderNeededToStart: productData?.minimumOrderNeededToStart,
			category: {
				connect: {
					id: productData?.categoryId
				}
			},
			price: productData?.minimumOrderNeededToStart,
			orderStartPrice: productData?.minimumOrderNeededToStart,
		}
		formik.setValues(initSate)
		const formattedImage = productData?.images?.map((img) => ({
			status: 'done',
			uid: v4(),
			name: img,
			url: getImage(img)

		})) ?? []
		setFiles(formattedImage)

	}
	const closeUpdateCanvas = (arg: boolean) => {
		setupdateCanvas(arg)
		formik.resetForm()
		setFiles([])
	}



	const createProduct = useCallback(
		async (data: {

			name: string;
			description: string;
			slug: string;
			images: never[];
			category: {
				connect: {
					id: string;
				};
			};
			price: number;
			orderStartPrice: number;
			minimumOrderNeededToStart: number
			type: ProductType,
			custom_product_status: CustomProductStatus,
		}) => {
			try {




				const { data: res } = await CreateProduct({
					variables: {
						data: {
							...data,
							images: {
								set: data.images
							},
							price: parseFloat(String(data.price)),
							orderStartPrice: parseFloat(String(data.orderStartPrice)),
							minimumOrderNeededToStart: parseFloat(String(data.minimumOrderNeededToStart)),

						}
					}
				})

				if (res?.createOneProduct.id) {
					notification.success({
						message: 'Created'
					})
					formik.resetForm()
					setFiles([])

				} else {
					notification.error({
						message: 'Something went wrong'
					})

				}
			} catch (error) {
				notification.error({
					message: 'Something went wrong'
				})
			}

		},
		[user],
	)

	const { data } = useProductsQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc
			}
		}
	})
	const products = data?.products ?? []
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
										Price{' '}
										<Icon
											size='lg'
											icon='FilterList'
										/>
									</th>
									<th scope='col'>type</th>
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
									<ProductTableRow openUpdateCanvas={openUpdateCanvas}
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

							<ProductForm formik={formik} setFiles={setFiles} files={files} update={true} />
						</Spin>
					</OffCanvasBody>
					<div className='row m-0'>
						<div className='col-12 p-3'>
							<Button
								color='info'
								className='w-100'
								onClick={formik.handleSubmit}>
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
