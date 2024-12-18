// @ts-nocheck

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
	useCreateOneEmployeeCategoryMutation,
	useEmployeeCategoriesQuery,
	useUpdateOneEmployeeCategoryMutation,
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

interface ICategoryTableProps {
	isFluid?: boolean;
}
const EmployeeCategoryTable: FC<ICategoryTableProps> = ({ isFluid }) => {
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
		position: number;
	}) => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
		setupdatedataState(item);
		formik.setFieldValue('name', item.name);
		formik.setFieldValue('position', item.position);
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
							// @ts-ignore

							set: values.name,
						},
						position: {
							// @ts-ignore

							set: parseInt(values.position),
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
			slug: '',
			position: 0,
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
			position: 0,
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
		useCreateOneEmployeeCategoryMutation();
	const [UpdateCategory, { loading: updatecategoryCreateLoading }] =
		useUpdateOneEmployeeCategoryMutation();

	const createData = async (data: any) => {
		const { data: res } = await CreateCategory({
			variables: {
				data: { ...data, position: parseInt(data.position) },
			},
		});
		if (res?.createOneEmployeeCategory.id) {
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
	};
	const { data, loading, refetch } = useEmployeeCategoriesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const categories = data?.employeeCategories;
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
								<th>Position</th>

								<td />
							</tr>
						</thead>
						<tbody>
							{categories?.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.position}</td>

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
							<FormGroup id='position' label='Position'>
								<Input
									type='number'
									size={'lg'}
									value={formik.values.position}
									isTouched={formik.touched.position}
									invalidFeedback={formik.errors.position}
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
				<></>
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
								<FormGroup id='position' label='Position'>
									<Input
										type='number'
										size={'lg'}
										value={formikCreateForm.values.position}
										isTouched={formikCreateForm.touched.position}
										invalidFeedback={formikCreateForm.errors.position}
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

export default EmployeeCategoryTable;
