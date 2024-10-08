import React, { useCallback, useContext, useState } from 'react'

import { useFormik } from 'formik'
import { v4 } from 'uuid'

import { Modal, notification, Spin, UploadFile } from 'antd'
import Card, { CardBody } from '@/components/bootstrap/Card'
import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Textarea from '@/components/bootstrap/forms/Textarea';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import { useCategoriesQuery, useCreateOneProductMutation, useUploadFileMutation, ProductType, CustomProductStatus } from '@/graphql/generated/schema';
import Input from '@/components/bootstrap/forms/Input';
import Button from '@/components/bootstrap/Button';
import AuthContext from '@/context/authContext';
import { useRouter } from 'next/router';
import { RcFile } from 'antd/es/upload';
import { getImage } from '@/utils/getImage';
import UploadSingleImage from "@/common/UploadMultipleFiles";
import Image from 'next/image'
import Select from '@/components/bootstrap/forms/Select'
import Option from '@/components/bootstrap/Option'
export	const uploadButton = (
	<>
		+
		<div style={{ marginTop: 8 }}>Upload</div>
	</>
);
export default function index({ isUpdate = false }: {
	isUpdate?: boolean
}) {
	const formik = useFormik({
		enableReinitialize: true,

		initialValues: {
			name: '',
			description: '',
			slug: '',
			images: [],
			type: undefined,
			custom_product_status: undefined,
			minimumOrderNeededToStart: 0,
			category: {
				connect: {
					id: ""
				}
			},
			price: 0,
			orderStartPrice: 0,



		},

		// validate: (values) => {
		// 	const errors: { email?: string; password?: string } = {};

		// 	if (!values.email) {
		// 		errors.email = 'Required';
		// 	}

		// 	if (!values.password) {
		// 		errors.password = 'Required';
		// 	}

		// 	return errors;
		// },
		validateOnChange: false,

		onSubmit: async (values) => {



			await createProduct(values as any);


		},
	});
	const [CreateProduct, { loading }] = useCreateOneProductMutation()
	const router = useRouter()
	const { user, authorize } = useContext(AuthContext)
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

	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [files, setFiles] = useState<any[]>([]);
	const handlePreview = async (file: UploadFile) => {

		setPreviewImage(file.url as string);
		setPreviewOpen(true);
	};
	const [FileUpload, { loading: loadingUpload }] = useUploadFileMutation()
	const handleBeforeUploadUpdate = async (file: RcFile): Promise<void> => {

		try {
			const { data } = await FileUpload({
				variables: {
					file
				},
			});
			if (isUpdate) {
				// updatesetFiles([{
				//     uid: v4(),
				//     name: data?.uploadFile?.file as string,
				//     status: 'done',
				//     url: getImage(data?.uploadFile?.file as string),
				// }])
				// updatesetValue('image', data?.uploadFile?.file)
			} else {
				setFiles((prev) => ([...prev, {
					uid: v4(),
					name: data?.uploadFile?.file as string,
					status: 'done',
					url: getImage(data?.uploadFile?.file as string),
				}]))
				formik.setFieldValue("images", [...formik.values.images, data?.uploadFile?.file])
			}

		} catch (error) {
			console.log(error);

		}



	};
	const handleCancel = () => setPreviewOpen(false);
	const { data } = useCategoriesQuery()
	return (
		<PageWrapper>

			<div>
				<Card stretch>

					<CardBody>
						<Spin spinning={loading}>

							<form className='row g-4' onSubmit={formik.handleSubmit}>

								<div className='col-md-6'>
									<FormGroup
										id='name'
										label='Name'
									>
										<Input type='text' size={'lg'} value={formik.values.name}
											isTouched={formik.touched.name}
											invalidFeedback={
												formik.errors.name
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}}

										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup
										id='slug'
										label='slug'
									>
										<Input type='text' size={'lg'} value={formik.values.slug}
											isTouched={formik.touched.slug}
											invalidFeedback={
												formik.errors.slug
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup
										id='price'
										label='price'
									>
										<Input type='text' size={'lg'} value={formik.values.price}
											isTouched={formik.touched.price}
											invalidFeedback={
												formik.errors.price
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>

								<div className='col-md-6'>
									<FormGroup
										id='type'
										label='type'
									>
										<Select ariaLabel='' size={'lg'} value={formik.values.type}
											isTouched={formik.touched.type}
											invalidFeedback={
												formik.errors.type
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										>
											{Object.keys(ProductType).map((key) =>
												<Option
													key={key}
													// @ts-ignore
													value={ProductType[key]}>
													{key}
												</Option>
											)
											}
										</Select>
									</FormGroup>
								</div>



								<div className='col-md-6'>
									<FormGroup
										id='custom_product_status'
										label='custom_product_status'
									>
										<Select ariaLabel='' size={'lg'} value={formik.values.custom_product_status}
											isTouched={formik.touched.custom_product_status}
											invalidFeedback={
												formik.errors.custom_product_status
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										>
											{Object.keys(CustomProductStatus).map((key) =>
												<Option
													key={key}
													// @ts-ignore
													value={CustomProductStatus[key]}>
													{key}
												</Option>
											)
											}
										</Select>
									</FormGroup>
								</div>



								<div className='col-md-6'>
									<FormGroup
										id='minimumOrderNeededToStart'
										label='minimumOrderNeededToStart'
									>
										<Input type='text' size={'lg'} value={formik.values.minimumOrderNeededToStart}
											isTouched={formik.touched.minimumOrderNeededToStart}
											invalidFeedback={
												formik.errors.minimumOrderNeededToStart
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>


								<div className='col-md-6'>
									<FormGroup
										id='orderStartPrice'
										label='orderStartPrice'
									>
										<Input type='text' size={'lg'} value={formik.values.orderStartPrice}
											isTouched={formik.touched.orderStartPrice}
											invalidFeedback={
												formik.errors.orderStartPrice
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup
										id='category.connect.id'
										label='Category'
									>
										<Select
											size={'lg'} value={formik.values.category.connect.id}
											isTouched={formik.touched.category?.connect?.id}
											invalidFeedback={
												formik.errors.category?.connect?.id
											}
											ariaLabel='Select category'
											placeholder='Select category'
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										>
											{data?.categories?.map((category) => (
												<Option
													key={category.id}
													value={category.id}>
													{category.name}
												</Option>
											))}

										</Select>
									</FormGroup>
								</div>
								<div className='col-md-12'>
									<FormGroup
										label='Images'
									>
										<Spin spinning={loadingUpload}>

											<UploadSingleImage uploadButton={uploadButton} filelist={
												// isUpdate ? updatefiles : 

												files}
												handlePreview={handlePreview} beforeUpload={handleBeforeUploadUpdate} handleRemove={() => {
													if (isUpdate) {

														// updatesetFiles([])
														// updatesetValue('image', '')
													} else {

														setFiles([])
													}


												}} />
											{/* <DropZone setFiles={setFiles} files={files}/> */}
										</Spin>
									</FormGroup>
								</div>




								<div className='col-md-12'>
									<FormGroup
										id='description'
										label='Description'
									>
										<Textarea size={'lg'} value={formik.values.description}
											isTouched={formik.touched.description}
											invalidFeedback={
												formik.errors.description
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>

								<div className='cold-md-12'>
									<div className=' d-flex justify-content-end'>

										<Button
											type='submit'
											color='primary'

										>
											Create
										</Button>
									</div>
								</div>

							</form>
						</Spin>
					</CardBody>
				</Card>
			</div>
			<Modal open={previewOpen} title={''} footer={null} onCancel={handleCancel}>
				<Image alt="example" height={300} width={500} src={previewImage} />
			</Modal>
		</PageWrapper>
	)
}
