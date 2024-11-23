import Avatar from '@/components/Avatar';
import Button from '@/components/bootstrap/Button';
import Card, { CardHeader, CardActions, CardBody } from '@/components/bootstrap/Card';

import { ModalBody, ModalFooter } from '@/components/bootstrap/Modal';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '@/components/bootstrap/OffCanvas';
import {
	SortOrder,
	useCreateOnePartnerShipMutation,
	useDeleteOnePartnerShipMutation,
	usePartnerShipLazyQuery,
	usePartnerShipsQuery,
	useUpdateOnePartnerShipMutation,
} from '@/graphql/generated/schema';
import useDarkMode from '@/hooks/useDarkMode';
import { message, Modal, notification, Popconfirm, Spin } from 'antd';
import classNames from 'classnames';
import { useFormik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import { getImage } from '@/utils/getImage';
import { v4 } from 'uuid';

import PartnerShipForm from './PartnerShipForm';

interface ICategoryTableProps {
	isFluid?: boolean;
}
const PartnerShipTable: FC<ICategoryTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	const [files, setFiles] = useState<any[]>([]);

	const [updateForm, setUpdateForm] = useState(false);
	const [updateId, setupdateId] = useState('');
	const handelOpenUpdate = async (id: string) => {
		setUpdateForm(!updateForm);
		setupdateId(id);
		const { data } = await LoadSingleData({
			variables: {
				where: {
					id,
				},
			},
		});
		if (data?.partnerShip) {
			const { name = '', link = '', position = 0, logo = '' } = data.partnerShip;
			const initState = {
				name,
				link,
				position,
				logo,
			};
			formik.setValues(initState);

			setFiles(() => [
				{
					uid: v4(),
					status: 'done',
					url: !logo.includes('https') ? getImage(logo) : logo,
				},
			]);
		}
	};

	const formik = useFormik({
		async onSubmit(values: any) {
			const deepCopiedValues = JSON.parse(JSON.stringify(values));
			Object.keys(deepCopiedValues).map((key) => {
				deepCopiedValues[key] = {
					set: deepCopiedValues[key],
				};
			});
			const { data } = await Update({
				variables: {
					where: {
						id: updateId,
					},
					data: {
						...deepCopiedValues,
					},
				},
			});
			if (data?.updateOnePartnerShip?.id) {
				message.success('Updated');
				setUpdateForm(false);
				refetch();
			} else {
				message.error('Something went wrong!');
			}
			return undefined;
		},
		initialValues: {
			name: '',
			logo: '',
			link: '',
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
			logo: '',
			link: '',
			position: 0,
		},
	});

	const [createModal, setcreateModal] = useState(false);
	const onOpenCreateModal = () => {
		setcreateModal(true);
	};
	const onCloseCreateModal = () => {
		setcreateModal(false);
		formikCreateForm.resetForm();
		setFiles([]);
	};

	const [Create, { loading: createLoading }] = useCreateOnePartnerShipMutation();
	const [Update, { loading: updateLoading }] = useUpdateOnePartnerShipMutation();
	const [Delete, { loading: deleteLoding }] = useDeleteOnePartnerShipMutation();

	const createData = async (data: any) => {
		try {
			const { data: res } = await Create({
				variables: {
					data: {
						...data,
						position: parseInt(data.position),
					},
				},
			});
			if (res?.createOnePartnerShip.id) {
				message.success('created');
				onCloseCreateModal();
				refetch();
			} else {
				message.error('something went wrong');
			}
		} catch (error) {
			console.log(error);
			message.error('something went wrong');
		}
	};
	const { data, loading, refetch } = usePartnerShipsQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const [LoadSingleData] = usePartnerShipLazyQuery();
	const partnerShips = data?.partnerShips;

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
								<th>Link</th>
								<th>Position</th>
								<th>Logo</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{partnerShips?.map((item) => (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>{item.link}</td>
									<td>{item.position}</td>
									<td>
										<Avatar
											src={
												!item.logo.includes('https')
													? getImage(item.logo)
													: item.logo
											}
											size={40}
										/>
									</td>
									<td>
										<div className=' d-flex flex-row gap-2'>
											<Button
												isOutline={!darkModeStatus}
												color='dark'
												isLight={darkModeStatus}
												className={classNames('text-nowrap', {
													'border-light': !darkModeStatus,
												})}
												icon='Edit'
												onClick={() => handelOpenUpdate(item.id)}>
												Edit
											</Button>
											<Popconfirm
												title='Are you sure?'
												onConfirm={async () => {
													const { data } = await Delete({
														variables: {
															where: {
																id: item.id,
															},
														},
													});
													if (data?.deleteOnePartnerShip?.id) {
														message.success('Deleted');
														await refetch();
													} else {
														message.error('Something went wrong');
													}
												}}>
												<Button
													isOutline={!darkModeStatus}
													color='danger'
													className={classNames('text-nowrap', {
														'border-light': !darkModeStatus,
													})}
													icon='Delete'
													// onClick={() => handelOpenUpdate(item.id)}
												>
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
				setOpen={(arg: boolean) => {
					setUpdateForm(arg);
					formik.resetForm();
					setFiles([]);
				}}
				isOpen={updateForm}
				titleId='upcomingEdit'
				isBodyScroll
				placement='end'>
				<Spin spinning={updateLoading}>
					<OffCanvasHeader setOpen={setUpdateForm}>
						<OffCanvasTitle id='upcomingEdit'>Edit Employees</OffCanvasTitle>
					</OffCanvasHeader>
					<OffCanvasBody>
						<PartnerShipForm formik={formik} files={files} setFiles={setFiles} />
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
						<PartnerShipForm
							formik={formikCreateForm}
							files={files}
							setFiles={setFiles}
						/>
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

export default PartnerShipTable;
