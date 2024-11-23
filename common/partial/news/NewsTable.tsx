import Avatar from '@/components/Avatar';
import Button from '@/components/bootstrap/Button';
import Card, { CardHeader, CardActions, CardBody } from '@/components/bootstrap/Card';

import { ModalBody, ModalFooter } from '@/components/bootstrap/Modal';

import { EditorState } from 'draft-js';

import {
	SortOrder,
	useCreateOneNewsMutation,
	useCreateOnePartnerShipMutation,
	useDeleteOneNewsMutation,
	useDeleteOnePartnerShipMutation,
	useFindManyNewsQuery,
	useFindUniqueNewsLazyQuery,
	usePartnerShipLazyQuery,
	usePartnerShipsQuery,
	useUpdateOneNewsMutation,
	useUpdateOnePartnerShipMutation,
} from '@/graphql/generated/schema';
import useDarkMode from '@/hooks/useDarkMode';
import { message, Modal, notification, Popconfirm, Spin } from 'antd';
import classNames from 'classnames';
import { useFormik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import { getImage } from '@/utils/getImage';
import { v4 } from 'uuid';
import { convertToHTML } from 'draft-convert';
import dynamic from 'next/dynamic';

const NewsForm = dynamic(() => import('./NewsForm'), { ssr: false });

interface ICategoryTableProps {
	isFluid?: boolean;
}
const NewsTable: FC<ICategoryTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

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
		if (data?.findUniqueNews) {
			const {
				title = '',
				description = '',
				position = 0,
				fetaureMedias = [],
			} = data.findUniqueNews;

			const initState = {
				title,
				position,
				fetaureMedias:{set:fetaureMedias},
				description: description,
			};
			formik.setValues(initState);

			setFiles(
				fetaureMedias.map((file) => ({
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
						fetaureMedias: {
							set: values.fetaureMedias?.set,
						},
						description:{
							set:convertToHTML(values.description.getCurrentContent())
						}
					},
				},
			});
			if (data?.updateOneNews?.id) {
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
			title: '',
			fetaureMedias: {
				set: [],
			},
			slug: '',
			position: 0,
			description: EditorState.createEmpty(),
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

	const [Create, { loading: createLoading }] = useCreateOneNewsMutation();
	const [Update, { loading: updateLoading }] = useUpdateOneNewsMutation();
	const [Delete, { loading: deleteLoding }] = useDeleteOneNewsMutation();

	const createData = async (data: any) => {
		try {
			const { data: res } = await Create({
				variables: {
					data: {
						...data,
						description: convertToHTML(data.description.getCurrentContent()),
						position: parseInt(data.position),
					},
				},
			});
			if (res?.createOneNews.id) {
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
	const { data, loading, refetch } = useFindManyNewsQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	const [LoadSingleData] = useFindUniqueNewsLazyQuery();
	const news = data?.findManyNews;

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
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{news?.map((item) => (
									<tr key={item.id}>
										<td>{item.title}</td>
										<td>{item.position}</td>

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
														if (data?.deleteOneNews?.id) {
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
				</Spin>
			</Card>
			<Modal
				centered
				footer={null}
				open={updateForm} // Example: state
				onCancel={onCloseUpdateForm}>
				<Spin spinning={updateLoading}>
					<NewsForm formik={formik} files={files} setFiles={setFiles} isUpdate={true} />

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
						<NewsForm formik={formikCreateForm} files={files} setFiles={setFiles} />
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

export default NewsTable;
