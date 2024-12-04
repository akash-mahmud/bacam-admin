import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Input from '@/components/bootstrap/forms/Input';
import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import { message, Modal, Spin, UploadFile } from 'antd';
import { FormikHelpers, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import UploadSingleImage from '@/common/UploadMultipleFiles';
import {
	useFindFirstHomeQuery,
	useUploadFileMutation,
	useUpsertOneHomeMutation,
} from '@/graphql/generated/schema';
import { uploadButton } from '../product/create';
import { getImage } from '@/utils/getImage';
import { RcFile } from 'antd/es/upload';
import { v4 } from 'uuid';
import { ModalBody } from '@/components/bootstrap/Modal';
import { getFileType } from '@/utils/fileType';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import Textarea from '@/components/bootstrap/forms/Textarea';
import Button from '@/components/bootstrap/Button';

export default function page() {
	const formik = useFormik({
		async onSubmit<Values>(values: any, formikHelpers: FormikHelpers<Values>) {
			let updateSate: any = {};
			if (data?.findFirstHome?.id) {
				Object.keys(values).map((key) => {
					updateSate[key] = {
						set: values[key],
					};
				});
			}
			const { data: Res } = await UpserHome({
				variables: {
					where: {
						id: data?.findFirstHome?.id ?? '',
					},
					create: {
						...values,
					},
					update: {
						...updateSate,
					},
				},
			});
			if (Res?.upsertOneHome.id) {
				if (data?.findFirstHome?.id) {
					message.success('Updated');
				} else {
					message.success('Created');
				}
			} else {
				message.error('Something went wrong!');
			}
			return undefined;
		},
		initialValues: {
			title: '',
			description: '',
			keywords: '',
			bannerUrl: '',
		},
	});
	const [FileUpload, { loading: loadingUpload }] = useUploadFileMutation();
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [files, setFiles] = useState<any[]>([]);
	const [UpserHome, { loading: upsertHomeLoading, data: upsertHomeData }] =
		useUpsertOneHomeMutation();
	const handlePreview = async (file: UploadFile) => {
		setPreviewImage(file.url as string);
		setPreviewOpen(true);
	};

	const handleBeforeUploadUpdate = async (file: RcFile): Promise<void> => {
		try {
			const { data } = await FileUpload({
				variables: {
					file,
				},
			});

			setFiles((prev) => [
				{
					uid: v4(),
					name: data?.uploadFile?.file as string,
					status: 'done',
					url: getImage(data?.uploadFile?.file as string),
				},
			]);
			formik.setFieldValue('bannerUrl', data?.uploadFile?.file);
		} catch (error) {
			console.log(error);
		}
	};
	const handleCancel = () => setPreviewOpen(false);
	const { loading, data } = useFindFirstHomeQuery();
	useEffect(() => {
		if (!loading && data?.findFirstHome) {
			const { id, __typename, ...rest } = data?.findFirstHome;
			const initState = {
				...rest,
			};
			setFiles([
				{
					uid: v4(),
					status: 'done',
					name: rest.bannerUrl,
					url: !rest?.bannerUrl?.includes('https')
						? getImage(rest.bannerUrl ?? '')
						: rest.bannerUrl,
				},
			]);
			formik.setValues(initState as any);
		}
	}, [loading, data]);

	return (
		<PageWrapper>
			<Page container='fluid'>
				<Spin spinning={loadingUpload || loading || upsertHomeLoading}>
					<div className='row h-100 ""-lg p-5 rounded'>
						<div className='col-12'>
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='title' label='title'>
										<Input
											size={'lg'}
											onChange={formik.handleChange}
											value={formik.values.title}
											isTouched={formik.touched.title}
											invalidFeedback={formik.errors.title}
											isValid={formik.isValid}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='description' label='description'>
										<Textarea
											onChange={formik.handleChange}
											value={formik.values.description}
											isTouched={formik.touched.description}
											invalidFeedback={formik.errors.description}
											isValid={formik.isValid}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='keywords' size={'lg'} label='keywords'>
										<Input
											onChange={formik.handleChange}
											value={formik.values.keywords}
											isTouched={formik.touched.keywords}
											invalidFeedback={formik.errors.keywords}
											isValid={formik.isValid}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}}
										/>
									</FormGroup>
								</div>
								<div className='col-md-12'>
									<FormGroup label='Banner'>
										<UploadSingleImage
											uploadButton={uploadButton}
											filelist={
												// isUpdate ? updatefiles :

												files
											}
											handlePreview={handlePreview}
											beforeUpload={handleBeforeUploadUpdate}
											handleRemove={(file) => {
												setFiles([]); // Remove file from list on delete

												formik.setFieldValue('bannerUrl', '');
											}}
										/>
									</FormGroup>
								</div>
								<div className=' d-flex justify-content-end'>
									<Button onClick={formik.handleSubmit} color='primary'>
										Save
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Spin>
			</Page>

			<Modal open={previewOpen} footer={null} onCancel={handleCancel}>
				<ModalBody>
					<div className='d-flex justify-content-center'>
						{getFileType(previewImage) === 'video' ? (
							<>
								<ReactPlayer url={previewImage} controls stopOnUnmount />
							</>
						) : getFileType(previewImage) === 'image' ? (
							<Image alt='example' height={300} width={300} src={previewImage} />
						) : null}
					</div>
				</ModalBody>
			</Modal>
		</PageWrapper>
	);
}
