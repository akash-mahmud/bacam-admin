import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { FormikHelpers, useFormik } from 'formik';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '@/components/bootstrap/Modal';
import {
	SortOrder,
	useCreateOneEmployeeSubCategoryMutation,
	useEmployeeCategoriesQuery,
	useEmployeeSubCategoriesQuery,
	useUpdateOneEmployeeSubCategoryMutation,
} from '@/graphql/generated/schema';
import Card, { CardHeader, CardActions, CardBody } from '@/components/bootstrap/Card';
import FormGroup from '@/components/bootstrap/forms/FormGroup';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '@/components/bootstrap/OffCanvas';
import useDarkMode from '@/hooks/useDarkMode';
import { notification, Spin } from 'antd';
import Button from '@/components/bootstrap/Button';
import Input from '@/components/bootstrap/forms/Input';
import Select from '@/components/bootstrap/forms/Select';
import Option from '@/components/bootstrap/Option';

interface ICategoryTableProps {
	isFluid?: boolean;
}
const EmployeeSubCategoryTable: FC<ICategoryTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const [updatedataState, setupdatedataState] = useState({});
	const handleUpcomingEdit = (item: { __typename?: 'Category'; id: string; name: string, employeeCategoryId:string }) => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
		setupdatedataState(item);
        console.log(item);
        
		formik.setFieldValue('name', item.name);
		formik.setFieldValue('employeeCategory', item.employeeCategoryId);
        
	};
	// END :: Upcoming Events

	const formik = useFormik({
		async onSubmit<Values>(values: Values, formikHelpers: FormikHelpers<Values>) {
			await UpdateCategory({
				variables: {
					where: {
						// @ts-ignore
						id: updatedataState.id,
					},
					data: {
						name: {
							set: values.name,
						},
                        employeeCategory:{
                            connect:{
id:values.employeeCategory
                            }
                        }
					},
				},
			});
			setUpcomingEventsEditOffcanvas(false);
			refetch();
			return undefined;
		},
		initialValues: {
			name: '',
			slug: '',
            employeeCategory:""
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
			slug: '',
			employeeCategory: '',
		},
	});

	const [createModal, setcreateModal] = useState(false);
	const onOpenCreateModal = () => {
		setcreateModal(true);
	};
	const onCloseCreateModal = () => {
		setcreateModal(false);
	};

	const [CreateCategory, { loading: categoryCreateLoading }] =
		useCreateOneEmployeeSubCategoryMutation();
	const [UpdateCategory, { loading: updatecategoryCreateLoading }] =
		useUpdateOneEmployeeSubCategoryMutation();

	const createData = async (data: any) => {
		try {
			const { data: res } = await CreateCategory({
				variables: {
					data: {
						...data,

						employeeCategory: {
							connect: {
								id: data.employeeCategory,
							},
						},
					},
				},
			});
			if (res?.createOneEmployeeSubCategory.id) {
				notification.success({
					message: 'created',
				});
				refetch();
				onCloseCreateModal();
			} else {
				notification.error({
					message: 'something went wrong',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
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
	const { data, loading, refetch } = useEmployeeSubCategoriesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const categories = catData?.employeeCategories;
	const subategories = data?.employeeSubCategories;
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
								<th>Id</th>
								<th>Name</th>

								<td />
							</tr>
						</thead>
						<tbody>
							{subategories?.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>

									<td>
										<Button
											isOutline={!darkModeStatus}
											color='dark'
											isLight={darkModeStatus}
											className={classNames('text-nowrap', {
												'border-light': !darkModeStatus,
											})}
											icon='Edit'
											onClick={() => handleUpcomingEdit(item)}>
											Edit
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardBody>
				{/* </Spin> */}
			</Card>

			<OffCanvas
				setOpen={setUpcomingEventsEditOffcanvas}
				isOpen={upcomingEventsEditOffcanvas}
				titleId='upcomingEdit'
				isBodyScroll
				placement='end'>
				<OffCanvasHeader setOpen={setUpcomingEventsEditOffcanvas}>
					<OffCanvasTitle id='upcomingEdit'>Edit Categories</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<div className='row g-4'>
						<div className='col-12'>
							<FormGroup id='name' label='name'>
								<Input onChange={formik.handleChange} value={formik.values.name} />
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
					</div>
				</OffCanvasBody>
				<div className='row m-0'>
					<div className='col-12 p-3'>
						<Button color='info' className='w-100' onClick={formik.handleSubmit}>
							Save
						</Button>
					</div>
				</div>
			</OffCanvas>

			<Modal
				id={'createCategory'}
				isOpen={createModal} // Example: state
				setIsOpen={setcreateModal}
				isScrollable={true}
				isCentered={true}>
				<Spin spinning={categoryCreateLoading}>
					<ModalHeader
						setIsOpen={setcreateModal} // Example: setState
					>
						<ModalTitle id='create-category'>Create Category</ModalTitle>
					</ModalHeader>
					<ModalBody>
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
								<FormGroup id='slug' label='slug'>
									<Input
										type='text'
										size={'lg'}
										value={formikCreateForm.values.slug}
										isTouched={formikCreateForm.touched.slug}
										invalidFeedback={formikCreateForm.errors.slug}
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
						</form>
					</ModalBody>
					<ModalFooter>
						<Button color='info' icon='save' onClick={formikCreateForm.handleSubmit}>
							Save
						</Button>
					</ModalFooter>
				</Spin>
			</Modal>
		</>
	);
};

export default EmployeeSubCategoryTable;
