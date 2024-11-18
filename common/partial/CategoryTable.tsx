// @ts-nocheck

import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { FormikHelpers, useFormik } from 'formik';
import Card, { CardActions, CardBody, CardHeader } from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';

import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';

import { PER_COUNT } from '../../components/PaginationButtons';
import useDarkMode from '../../hooks/useDarkMode';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '@/components/bootstrap/Modal';
import {
	SortOrder,
	useCategoriesQuery,
	useCreateOneCategoryMutation,
	useDeleteOneCategoryMutation,
	useMainCategoriesQuery,
	useUpdateOneCategoryMutation,
} from '@/graphql/generated/schema';
import { Modal, notification, Popconfirm, Select, Spin } from 'antd';
import slug from 'slug';
import Label from '@/components/bootstrap/forms/Label';

interface ICategoryTableProps {
	isFluid?: boolean;
}
const CategoryTable: FC<ICategoryTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const [updatedataState, setupdatedataState] = useState({});
	const handleUpcomingEdit = (item: {
		__typename?: 'Category';
		id: string;
		name: string;
		mainCategoryId: string;
	}) => {
		console.log(item);

		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
		setupdatedataState(item);
		formik.setFieldValue('name', item.name);
		formik.setFieldValue('mainCategory', item.mainCategoryId);
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
						mainCategory: values.mainCategory
							? {
									connect: {
										id: values.mainCategory,
									},
							  }
							: undefined,
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
			mainCategory: '',
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
			mainCategory: '',
		},
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const [createModal, setcreateModal] = useState(false);
	const onOpenCreateModal = () => {
		setcreateModal(true);
	};
	const onCloseCreateModal = () => {
		setcreateModal(false);
	};

	const [CreateCategory, { loading: categoryCreateLoading }] = useCreateOneCategoryMutation();
	const [UpdateCategory, { loading: updatecategoryCreateLoading }] =
		useUpdateOneCategoryMutation();

	const createData = async (data: any) => {
		const { data: res } = await CreateCategory({
			variables: {
				data: {
					...data,
					mainCategory: {
						connect: {
							id: data.mainCategory,
						},
					},
				},
			},
		});
		if (res?.createOneCategory.id) {
			notification.success({
				message: 'created',
			});
			refetch();
			formikCreateForm.resetForm();
			onCloseCreateModal();
		} else {
			notification.error({
				message: 'something went wrong',
			});
		}
	};
	const { data, loading, refetch } = useCategoriesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const categories = data?.categories;
	const [Delete] = useDeleteOneCategoryMutation();
	const {
		data: MaincatData,
		loading: MaincatDataLoading,
		refetch: MaincatDataRefetch,
	} = useMainCategoriesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const maincategories = MaincatData?.mainCategories;
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
							{categories?.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>

									<td>
										<div className='d-flex gap-1 flex-wrap'>
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
											<Popconfirm
												onConfirm={async () => {
													await Delete({
														variables: {
															where: {
																id: item.id,
															},
														},
													});
													await refetch();
												}}
												title='Are you sure?'>
												<Button
													isOutline={!darkModeStatus}
													color='dark'
													isLight={darkModeStatus}
													className={classNames('text-nowrap', {
														'border-light': !darkModeStatus,
													})}
													icon='Edit'>
													Delete
												</Button>
											</Popconfirm>
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
							<FormGroup id='mainCategory' label='Main Category'>
								<Select
									ariaLabel=''
									value={formik.values.mainCategory}
									isTouched={formik.touched.mainCategory}
									invalidFeedback={formik.errors.mainCategory}
									isValid={formik.isValid}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									onFocus={() => {
										formik.setErrors({});
									}}
									className=''>
									{maincategories?.map((maincat) => (
										<Select.Option value={maincat.id}>
											{maincat.name}
										</Select.Option>
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
				open={createModal} // Example: state
				footer={null}
				centered
				onCancel={onCloseCreateModal}>
				<></>
				<Spin spinning={categoryCreateLoading}>
					<ModalHeader>
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
										onChange={(args: React.ChangeEvent<HTMLInputElement>) => {
											formikCreateForm.handleChange(args);

											formikCreateForm.setFieldValue(
												'slug',
												slug(args.target.value),
											);
										}}
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
							<div className='col-md-12 mb-3'>
								<Label>Main category</Label>
								<Select
									value={formikCreateForm.values.mainCategory}
									onChange={(value) =>
										formikCreateForm.setFieldValue(
											'mainCategory',
											value,
										)
									}
									className=' w-100'>
									{maincategories?.map((maincat) => (
										<Select.Option value={maincat.id}>
											{maincat.name}
										</Select.Option>
									))}
								</Select>
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

export default CategoryTable;
