import Button from '@/components/bootstrap/Button';
import Card, { CardHeader, CardActions, CardBody } from '@/components/bootstrap/Card';

import { ModalBody, ModalFooter } from '@/components/bootstrap/Modal';

import {
	SortOrder,
	useCreateOneEmployeePreviousWorkMutation,
	useDeleteOneEmployeePreviousWorkMutation,
	useEmployeePreviousWorkLazyQuery,
	useEmployeePreviousWorksQuery,

	useUpdateOneEmployeePreviousWorkMutation,
} from '@/graphql/generated/schema';
import useDarkMode from '@/hooks/useDarkMode';
import { message, Modal, notification, Popconfirm, Spin } from 'antd';
import classNames from 'classnames';
import { useFormik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import { getImage } from '@/utils/getImage';
import { v4 } from 'uuid';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const PreviousWorkForm = dynamic(() => import('./PreviousWorkForm'), { ssr: false });

interface ICategoryTableProps {
	isFluid?: boolean;
}
const PreviousWorkTable: FC<ICategoryTableProps> = ({ isFluid }) => {
	const {  darkModeStatus } = useDarkMode();

	const [files, setFiles] = useState<any[]>([]);

	const [updateForm, setUpdateForm] = useState(false);
	const [updateId, setupdateId] = useState('');
	const onCloseUpdateForm = () => setUpdateForm(false);
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
		if (data?.employeePreviousWork) {
			const {
				title = '',
				description = '',
				position = 0,
				link = '',

				files = [],
			} = data.employeePreviousWork;

			const initState = {
				title,
				position,
				files: { set: files },
				description: description,
				link,
			};
			formik.setValues(initState);

			setFiles(
				files.map((file) => ({
					uid: v4(),
					status: 'done',
					name: file,
					url: !file.includes('https') ? getImage(file) : file,
				})),
			);
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
						files: {
							set: values.files?.set,
						},
					},
				},
			});
			if (data?.updateOneEmployeePreviousWork?.id) {
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
			files: {
				set: [],
			},
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
			title: '',
			files: {
				set: [],
			},
			slug: '',
			link: '',
			position: 0,
			description: '',
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

	const [Create, { loading: createLoading }] = useCreateOneEmployeePreviousWorkMutation();
	const [Update, { loading: updateLoading }] = useUpdateOneEmployeePreviousWorkMutation();
	const [Delete, { loading: deleteLoding }] = useDeleteOneEmployeePreviousWorkMutation();
	const router = useRouter();
	const createData = async (data: any) => {
		try {
			const { data: res } = await Create({
				variables: {
					data: {
						...data,
						position: parseInt(data.position),
						employee: {
							connect: {
								id: String(router.query.id),
							},
						},
					},
				},
			});
			if (res?.createOneEmployeePreviousWork.id) {
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
	const { data, loading, refetch } = useEmployeePreviousWorksQuery({
		variables: {
			where: {
				employeeId: {
					equals: String(router.query.id),
				},
			},
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const [LoadSingleData] = useEmployeePreviousWorkLazyQuery();
	const employeePreviousWorks = data?.employeePreviousWorks;

	return (
		<>
			<Card stretch={isFluid}>
				<Spin spinning={updateLoading || createLoading || loading || deleteLoding}>
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
									<th>Title</th>
									<th>Position</th>
									<th>Link</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{employeePreviousWorks?.map((item) => (
									<tr key={item.id}>
										<td>{item.title}</td>
										<td>{item.position}</td>
										<td>{item.link}</td>

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
														if (
															data?.deleteOneEmployeePreviousWork?.id
														) {
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
														icon='Delete'>
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
				</Spin>
			</Card>
			<Modal
				centered
				footer={null}
				open={updateForm} // Example: state
				onCancel={onCloseUpdateForm}>
				<Spin spinning={updateLoading}>
					<PreviousWorkForm
						formik={formik}
						files={files}
						setFiles={setFiles}
						isUpdate={true}
					/>

					<ModalFooter>
						<Button color='info' onClick={formik.handleSubmit}>
							Save
						</Button>
					</ModalFooter>
				</Spin>
			</Modal>

			<Modal
				centered
				footer={null}
				open={createModal} // Example: state
				onCancel={onCloseCreateModal}>
				<Spin spinning={createLoading}>
					<ModalBody className=''>
						<PreviousWorkForm
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

export default PreviousWorkTable;
