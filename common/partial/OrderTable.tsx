import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { FormikHelpers, useFormik } from 'formik';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import { priceFormat } from '../../helpers/helpers';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Icon from '../../components/icon/Icon';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Textarea from '../../components/bootstrap/forms/Textarea';
import Checks from '../../components/bootstrap/forms/Checks';
import Popovers from '../../components/bootstrap/Popovers';
import data from '../data/dummyEventsData';
import Avatar from '../../components/Avatar';
import useDarkMode from '../../hooks/useDarkMode';
import { OrderStatus, SortOrder, useOrdersQuery, useUpdateOneOrderMutation } from '@/graphql/generated/schema';
import { Spin } from 'antd';
import dayjs from 'dayjs';
import { PER_COUNT } from '@/components/PaginationButtons';
import useSortableData from '@/hooks/useSortableData';
import { getImage } from '@/utils/getImage';

interface IOrderTableProps {
	isFluid?: boolean;
}
const OrderTable: FC<IOrderTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();
	const { items, requestSort, getClassNamesFor } = useSortableData(data);

	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const [updatedataState, setupdatedataState] = useState({})
	const handleUpcomingEdit = (item: { __typename?: "Category"; id: string; name: string; }) => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
		setupdatedataState(item)
		formik.setFieldValue('name', item.name)
	};
	// END :: Upcoming Events

	const formik = useFormik({
		async onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		) {
			// await UpdateCategory({
			// 	variables:{
			// 		where:{
			// 			// @ts-ignore
			// 			id: updatedataState.id
			// 		},
			// 		data:{
			// 		name:{
			// 			set:values.name
			// 		}
			// 		}
			// 	}
			// })
			setUpcomingEventsEditOffcanvas(false)
			refetch()
			return undefined;
		},
		initialValues: {

			name: '',
			slug: '',
		},
	});

	const [UpdateOrder, { loading: updateOneOrderLoading }] = useUpdateOneOrderMutation()
	const { data: orderData, loading, refetch } = useOrdersQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc
			}
		}
	})
	const orders = orderData?.orders
	return (
		<>

			<Card stretch={isFluid}>

				<CardBody className='table-responsive' isScrollable={isFluid}>
					<Spin spinning={updateOneOrderLoading || loading}>
						<table className='table table-modern'>
							<thead>
								<tr>
									<td style={{ width: 60 }} />
									<td />
									<th
										onClick={() => requestSort('date')}
										className='cursor-pointer text-decoration-underline'>
										OrderedAt
										<Icon
											size='lg'
											className={getClassNamesFor('date')}
											icon='FilterList'
										/>
									</th>
									<th>Customer</th>
									<th>Product</th>
									<th>Status</th>

									<th>Quantity</th>
									<th>shippingAddress</th>

									<th>tax</th>
									<th>itemsPrePrice</th>
									<th>itemsPrice</th>
									<th>shippingPrice</th>
									<th>totalPrice</th>
									<th>itemsPrePricePaymentSessionId</th>
									<th>itemsTotalPricePaymentSessionId</th>

								</tr>
							</thead>
							<tbody>
								{orders?.map((item) => (
									<tr key={item.id}>
										<td>
											<Button
												isOutline={!darkModeStatus}
												color='dark'
												isLight={darkModeStatus}
												className={classNames({
													'border-light': !darkModeStatus,
												})}
												icon='Info'
												onClick={handleUpcomingDetails}
												aria-label='Detailed information'
											/>
										</td>
										<td>
											<Button
												isOutline={!darkModeStatus}
												color='dark'
												isLight={darkModeStatus}
												className={classNames('text-nowrap', {
													'border-light': !darkModeStatus,
												})}
												icon='Edit'
												onClick={handleUpcomingEdit}>
												Edit
											</Button>
										</td>
										<td>
											<div className='d-flex align-items-center'>
												<span
													className={classNames(
														'badge',
														'border border-2',
														[`border-${themeStatus}`],
														'rounded-circle',
														'bg-success',
														'p-2 me-2',
														// `bg-${item.status.color}`,
													)}>
													<span className='visually-hidden'>
														{item.status}
													</span>
												</span>
												<span className='text-nowrap'>
													{dayjs(item.createdAt).format(
														'MMM Do YYYY, h:mm a',
													)}
												</span>
											</div>
										</td>
										<td>
											<div>
												<div>{`${item.user.firstname} ${item.user.lastname}`}</div>
												<div className='small text-muted'>
													{item.user.email}
												</div>
											</div>
										</td>
										<td>
											<div className='d-flex flex-column '>
												<div className='flex-shrink-0 '>

													<Avatar
														src={getImage(item.orderItem[0].product?.images[0] ?? "") ?? ""}
														size={36}


													/>
												</div>
												<div className='flex-grow-1 ms-3 mt-4 d-flex align-items-center text-nowrap'>
													{`${item.orderItem[0].product.name}`}
												</div>
											</div>
										</td>
										<td>
											<Dropdown>
												<DropdownToggle hasIcon={false}>
													<Button
														isLink
														// color={item.status.color}
														icon='Circle'
														className='text-nowrap'>
														{item.status}
													</Button>
												</DropdownToggle>
												<DropdownMenu >
													{Object.keys(OrderStatus).map((key) => (
														<DropdownItem onClick={async () => {
															await UpdateOrder({
																variables: {
																	where: {
																		id: item.id
																	},
																	data: {
																		status: {
																			// @ts-ignore
																			set: OrderStatus[key]
																		}
																	}
																}
															})
															await refetch()
														}} key={key}>
															<div>
																<Icon
																	icon='Circle'
																/>
																{/*  @ts-ignore */}

																{OrderStatus[key]}
															</div>
														</DropdownItem>
													))}
												</DropdownMenu>
											</Dropdown>
										</td>
										<td>{item.orderItem?.qty}</td>

										<td>
											<Button>
												View
											</Button>
										</td>

										<td>{priceFormat(item.taxPrice ?? 0)}</td>
										<td>{priceFormat(item.itemsPrePrice ?? 0)}</td>
										<td>{priceFormat(item.itemsPrice ?? 0)}</td>
										<td>{priceFormat(item.shippingPrice ?? 0)}</td>
										<td>{priceFormat(item.totalPrice ?? 0)}</td>

										<td>{item.itemsPrePricePaymentSessionId}</td>
										<td>{item.itemsTotalPricePaymentSessionId}</td>

									</tr>
								))}
							</tbody>
						</table>
					</Spin>
				</CardBody>
			</Card>

			<OffCanvas
				setOpen={setUpcomingEventsEditOffcanvas}
				isOpen={upcomingEventsEditOffcanvas}
				titleId='upcomingEdit'
				isBodyScroll
				placement='end'>
				<OffCanvasHeader setOpen={setUpcomingEventsEditOffcanvas}>
					<OffCanvasTitle id='upcomingEdit'>Edit Appointments</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<div className='row g-4'>
						<div className='col-12'>
							<FormGroup id='customerName' label='Customer'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.customerName}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='service' label='Service'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.service}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='employee' label='Employee'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.employee}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='location' label='Location'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.location}
								/>
							</FormGroup>
						</div>
						<div className='col-6'>
							<FormGroup id='date' label='Date'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.date}
									type='date'
								/>
							</FormGroup>
						</div>
						<div className='col-6'>
							<FormGroup id='time' label='time'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.time}
									type='time'
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<Card isCompact borderSize={2} shadow='none' className='mb-0'>
								<CardHeader>
									<CardLabel>
										<CardTitle>Extras</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<FormGroup id='note' label='Note'>
										<Textarea
											onChange={formik.handleChange}
											value={formik.values.note}
										/>
									</FormGroup>
								</CardBody>
							</Card>
						</div>
						<div className='col-12'>
							<Card isCompact borderSize={2} shadow='none' className='mb-0'>
								<CardHeader>
									<CardLabel>
										<CardTitle>Notification</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<FormGroup>
										<Checks
											id='notify'
											type='switch'
											label={
												<>
													Notify the Customer
													<Popovers
														trigger='hover'
														desc='Check this checkbox if you want your customer to receive an email about the scheduled appointment'>
														<Icon
															icon='Help'
															size='lg'
															className='ms-1 cursor-help'
														/>
													</Popovers>
												</>
											}
											onChange={formik.handleChange}
											checked={formik.values.notify}
										/>
									</FormGroup>
								</CardBody>
							</Card>
						</div>
					</div>
				</OffCanvasBody>
				<div className='row m-0'>
					<div className='col-12 p-3'>
						<Button
							color='info'
							className='w-100'
							onClick={() => setUpcomingEventsEditOffcanvas(false)}>
							Save
						</Button>
					</div>
				</div>
			</OffCanvas>




		</>
	);
};

export default OrderTable;
