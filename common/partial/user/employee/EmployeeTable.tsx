// @ts-nocheck

import Avatar from '@/components/Avatar';
import Button from '@/components/bootstrap/Button';
import Card, { CardHeader, CardActions, CardBody } from '@/components/bootstrap/Card';
import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Input from '@/components/bootstrap/forms/Input';
import Textarea from '@/components/bootstrap/forms/Textarea';
import { ModalBody, ModalFooter } from '@/components/bootstrap/Modal';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '@/components/bootstrap/OffCanvas';
import {
	Employee,
	SortOrder,
	useCreateOneEmployeeMutation,
	useEmployeeCategoriesQuery,
	useEmployeesQuery,
	useEmployeeSubCategoriesQuery,
	useUpdateOneEmployeeMutation,
	useUploadFileMutation,
} from '@/graphql/generated/schema';
import useDarkMode from '@/hooks/useDarkMode';
import { Modal, notification, Popconfirm, Spin, UploadFile } from 'antd';
import classNames from 'classnames';
import { useFormik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import UploadSingleImage from '@/common/UploadMultipleFiles';
import { uploadButton } from '@/pages/product/create';
import { RcFile } from 'antd/es/upload';
import { getImage } from '@/utils/getImage';
import { v4 } from 'uuid';
import Image from 'next/image';
import Select from '@/components/bootstrap/forms/Select';
import Option from '@/components/bootstrap/Option';
import { useRouter } from 'next/router';

interface ICategoryTableProps {
	isFluid?: boolean;
}
const EmployeeTable: FC<ICategoryTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [files, setFiles] = useState<any[]>([]);
	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const [updatedataState, setupdatedataState] = useState({});
	const handleUpcomingEdit = (item: Employee) => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
		setupdatedataState(item);
		formik.setFieldValue('name', item.name);
		formik.setFieldValue('image', item.image);
		formik.setFieldValue('shortDescription', item.shortDescription);
		item.employeeCategoryId &&
			formik.setFieldValue('employeeCategory', item.employeeCategoryId);
		item.employeeSubCategoryId &&
			formik.setFieldValue('employeeSubCategory', item.employeeSubCategoryId);
		setFiles(() => [
			{
				uid: v4(),
				status: 'done',
				url: !item.image.includes('https') ? getImage(item.image) : item.image,
			},
		]);
	};
	// END :: Upcoming Events

	const formik = useFormik({
		async onSubmit(values: any) {
			await Update({
				variables: {
					where: {
						// @ts-ignore
						id: updatedataState.id,
					},
					data: {
						name: {
							set: values.name,
						},
						employeeCategory: {
							connect: {
								id: values.employeeCategory,
							},
						},
						employeeSubCategory: values?.employeeSubCategory
							? {
									connect: {
										id: values?.employeeSubCategory,
									},
							  }
							: undefined,
						image: {
							set: values.image,
						},

						shortDescription: {
							set: values.shortDescription,
						},
					},
				},
			});
			setUpcomingEventsEditOffcanvas(false);
			refetch();
			return undefined;
		},
		initialValues: {
			name: '',
			image: '',
			shortDescription: '',
			employeeCategory: '',
			employeeSubCategory: undefined,
		},
	});

	const formikCreateForm = useFormik({
		onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		): void | Promise<any> {
			createData(values);
			return undefined;
		},
		initialValues: {
			name: '',
			image: '',
			shortDescription: '',
			employeeCategory: '',
			employeeSubCategory: undefined,
		},
	});
	const handlePreview = async (file: UploadFile) => {
		setPreviewImage(file.url as string);
		setPreviewOpen(true);
	};
	const [FileUpload, { loading: loadingUpload }] = useUploadFileMutation();
	const handleBeforeUploadUpdate = async (file: RcFile): Promise<void> => {
		try {
			const { data } = await FileUpload({
				variables: {
					file,
				},
			});

			setFiles((prev) => [
				...prev,
				{
					uid: v4(),
					name: data?.uploadFile?.file as string,
					status: 'done',
					url: getImage(data?.uploadFile?.file as string),
				},
			]);
			if (upcomingEventsEditOffcanvas) {
				formik.setFieldValue('image', data?.uploadFile?.file);
			} else {
				formikCreateForm.setFieldValue('image', data?.uploadFile?.file);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleCancel = () => setPreviewOpen(false);
	const [createModal, setcreateModal] = useState(false);
	const onOpenCreateModal = () => {
		setcreateModal(true);
	};
	const onCloseCreateModal = () => {
		setcreateModal(false);
		formikCreateForm.resetForm();
		setFiles([]);
	};

	const [Create, { loading: createLoading }] = useCreateOneEmployeeMutation();
	const [Update, { loading: updateLoading }] = useUpdateOneEmployeeMutation();

	const createData = async (data: any) => {
		try {
			const { data: res } = await Create({
				variables: {
					data: {
						...data,
						employeeCategory: {
							connect: {
								id: data.employeeCategory,
							},
						},
						employeeSubCategory: data?.employeeSubCategory
							? {
									connect: {
										id: data?.employeeSubCategory,
									},
							  }
							: undefined,
					},
				},
			});
			if (res?.createOneEmployee.id) {
				notification.success({
					message: 'created',
				});
				onCloseCreateModal();
				refetch();
			} else {
				notification.error({
					message: 'something went wrong',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	const { data, loading, refetch } = useEmployeesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const {
		data: catData,
		loading: loadingcat,
		refetch: refetchCat,
	} = useEmployeeCategoriesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const {
		data: subCatData,
		loading: subCatLoading,
		refetch: subCatRefetch,
	} = useEmployeeSubCategoriesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const employees = data?.employees;

	const categories = catData?.employeeCategories;
	const subcategories = subCatData?.employeeSubCategories;
	const router = useRouter();
	return (
		<>
			<Card stretch={isFluid}>
				{/* <Spin spinning={updatecategoryCreateLoading||loading}> */}
				<CardHeader borderSize={1}>
					<CardActions>
						<Button
							color='info'
							icon='CloudDownload'
							isLight
							onClick={onOpenCreateModal}>
							Create
						</Button>
					</CardActions>
				</CardHeader>
				<CardBody className='table-responsive' isScrollable={isFluid}>
					<table className='table table-modern'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Image</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{employees?.map((item) => (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>
										<Avatar
											src={
												!item.image.includes('https')
													? getImage(item.image)
													: item.image
											}
											size={40}
										/>
									</td>
									<td>
										<div className='d-flex flex-row gap-2'>
											<Button
												isOutline={!darkModeStatus}
												color='dark'
												isLight={darkModeStatus}
												className={classNames('text-nowrap', {
													'border-light': !darkModeStatus,
												})}
												icon='Edit'
												onClick={() =>
													handleUpcomingEdit(item as Employee)
												}>
												Edit
											</Button>
											<Popconfirm title='Are you sure?' onConfirm={() => {}}>
												<Button
													isOutline={!darkModeStatus}
													color='danger'
													isLight={darkModeStatus}
													className={classNames('text-nowrap', {
														'border-light': !darkModeStatus,
													})}
													icon='Delete'
													onClick={() => {}}>
													Delete
												</Button>
											</Popconfirm>
											<Button
												onClick={() =>
													router.push(`${router.asPath}/${item.id}`)
												}
												isOutline={!darkModeStatus}
												color='dark'
												isLight={darkModeStatus}
												className={classNames('text-nowrap', {
													'border-light': !darkModeStatus,
												})}
												icon='List'>
												Previous works
											</Button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardBody>
				{/* </Spin> */}
			</Card>

			<OffCanvas
				setOpen={(arg: boolean) => {
					setUpcomingEventsEditOffcanvas(arg);
					formik.resetForm();
					setFiles([]);
				}}
				isOpen={upcomingEventsEditOffcanvas}
				titleId='upcomingEdit'
				isBodyScroll
				placement='end'>
				<Spin spinning={updateLoading}>
					<OffCanvasHeader setOpen={setUpcomingEventsEditOffcanvas}>
						<OffCanvasTitle id='upcomingEdit'>Edit Employees</OffCanvasTitle>
					</OffCanvasHeader>
					<OffCanvasBody>
						<div className='row g-4'>
							<div className='col-12'>
								<FormGroup id='name' label='name'>
									<Input
										onChange={formik.handleChange}
										value={formik.values.name}
									/>
								</FormGroup>
							</div>
							<div className='col-md-12'>
								<FormGroup id='employeeCategory' label='Category'>
									<Select
										placeholder='Select category'
										ariaLabel=''
										value={formik.values.employeeCategory}
										isTouched={formik.touched.employeeCategory}
										invalidFeedback={formik.errors.employeeCategory}
										isValid={formik.isValid}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										onFocus={() => {
											formik.setErrors({});
										}}
										className=''>
										{categories?.map((category) => (
											<Option value={category.id}>{category.name}</Option>
										))}
									</Select>
								</FormGroup>
							</div>
							<div className='col-md-12'>
								<FormGroup id='employeeSubCategory' label='Subcategory'>
									<Select
										placeholder='Select subcategory'
										ariaLabel=''
										value={formik.values.employeeSubCategory}
										isTouched={formik.touched.employeeSubCategory}
										invalidFeedback={formik.errors.employeeSubCategory}
										isValid={formik.isValid}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										onFocus={() => {
											formik.setErrors({});
										}}
										className=''>
										{subcategories?.map((subcategory) => (
											<Option value={subcategory.id}>
												{subcategory.name}
											</Option>
										))}
									</Select>
								</FormGroup>
							</div>
							<div className='col-md-12'>
								<FormGroup id='shortDescription' label='Short description'>
									<Textarea
										rows={6}
										size={'lg'}
										value={formik.values.shortDescription}
										isTouched={formik.touched.shortDescription}
										invalidFeedback={formik.errors.shortDescription}
										isValid={formik.isValid}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										onFocus={() => {
											formik.setErrors({});
										}}
										className=''
									/>
								</FormGroup>
							</div>

							<div className='col-md-12'>
								<FormGroup label='Images'>
									<Spin spinning={loadingUpload}>
										<UploadSingleImage
											uploadButton={uploadButton}
											filelist={
												// isUpdate ? updatefiles :

												files
											}
											handlePreview={handlePreview}
											beforeUpload={handleBeforeUploadUpdate}
											handleRemove={() => {
												// if (isUpdate) {

												// 	// updatesetFiles([])
												// 	// updatesetValue('image', '')
												// } else {

												setFiles([]);
												// }
											}}
										/>
									</Spin>
								</FormGroup>
							</div>
						</div>
					</OffCanvasBody>
					<div className='row m-0'>
						<div className='col-12 p-3'>
							<Button color='info' className='w-100' onClick={formik.handleSubmit}>
								Save
							</Button>
						</div>
					</div>
				</Spin>
			</OffCanvas>

			<Modal
				footer={null}
				open={createModal} // Example: state
				onCancel={onCloseCreateModal}>
				<></>
				<Spin spinning={createLoading}>
					<ModalBody className=''>
						<form className='row g-4'>
							<div className='col-md-12'>
								<FormGroup id='name' label='Name'>
									<Input
										type='text'
										size={'lg'}
										value={formikCreateForm.values.name}
										isTouched={formikCreateForm.touched.name}
										invalidFeedback={formikCreateForm.errors.name}
										isValid={formikCreateForm.isValid}
										onChange={formikCreateForm.handleChange}
										onBlur={formikCreateForm.handleBlur}
										onFocus={() => {
											formikCreateForm.setErrors({});
										}}
									/>
								</FormGroup>
							</div>
							<div className='col-md-12'>
								<FormGroup id='employeeCategory' label='Category'>
									<Select
										placeholder='Select category'
										ariaLabel=''
										value={formikCreateForm.values.employeeCategory}
										isTouched={formikCreateForm.touched.employeeCategory}
										invalidFeedback={formikCreateForm.errors.employeeCategory}
										isValid={formikCreateForm.isValid}
										onChange={formikCreateForm.handleChange}
										onBlur={formikCreateForm.handleBlur}
										onFocus={() => {
											formikCreateForm.setErrors({});
										}}
										className=''>
										{categories?.map((category) => (
											<Option value={category.id}>{category.name}</Option>
										))}
									</Select>
								</FormGroup>
							</div>
							<div className='col-md-12'>
								<FormGroup id='employeeSubCategory' label='Subcategory'>
									<Select
										placeholder='Select subcategory'
										ariaLabel=''
										value={formikCreateForm.values.employeeSubCategory}
										isTouched={formikCreateForm.touched.employeeSubCategory}
										invalidFeedback={
											formikCreateForm.errors.employeeSubCategory
										}
										isValid={formikCreateForm.isValid}
										onChange={formikCreateForm.handleChange}
										onBlur={formikCreateForm.handleBlur}
										onFocus={() => {
											formikCreateForm.setErrors({});
										}}
										className=''>
										{subcategories?.map((subcategory) => (
											<Option value={subcategory.id}>
												{subcategory.name}
											</Option>
										))}
									</Select>
								</FormGroup>
							</div>
							<div className='col-md-12'>
								<FormGroup id='shortDescription' label='Short description'>
									<Textarea
										size={'lg'}
										value={formikCreateForm.values.shortDescription}
										isTouched={formikCreateForm.touched.shortDescription}
										invalidFeedback={formikCreateForm.errors.shortDescription}
										isValid={formikCreateForm.isValid}
										onChange={formikCreateForm.handleChange}
										onBlur={formikCreateForm.handleBlur}
										onFocus={() => {
											formikCreateForm.setErrors({});
										}}
										className=''
									/>
								</FormGroup>
							</div>

							<div className='col-md-12'>
								<FormGroup label='Images'>
									<Spin spinning={loadingUpload}>
										<UploadSingleImage
											uploadButton={uploadButton}
											filelist={
												// isUpdate ? updatefiles :

												files
											}
											handlePreview={handlePreview}
											beforeUpload={handleBeforeUploadUpdate}
											handleRemove={() => {
												// if (isUpdate) {

												// 	// updatesetFiles([])
												// 	// updatesetValue('image', '')
												// } else {

												setFiles([]);
												// }
											}}
										/>
									</Spin>
								</FormGroup>
							</div>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button color='info' icon='save' onClick={formikCreateForm.handleSubmit}>
							Save
						</Button>
					</ModalFooter>
				</Spin>
			</Modal>

			<Modal open={previewOpen} footer={null} onCancel={handleCancel}>
				<ModalBody>
					<div className='d-flex justify-content-center'>
						<Image alt='example' height={300} width={300} src={previewImage} />
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default EmployeeTable;
