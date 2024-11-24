import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Input from '@/components/bootstrap/forms/Input';
import { Modal, Select, Spin, UploadFile } from 'antd';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import UploadSingleImage from '@/common/UploadMultipleFiles';
import { uploadButton } from '@/pages/product/create';
import { v4 } from 'uuid';
import { getImage } from '@/utils/getImage';
import { useUploadFileMutation } from '@/graphql/generated/schema';
import { RcFile } from 'antd/es/upload';
import { ModalBody } from '@/components/bootstrap/Modal';
import Image from 'next/image';

import Label from '@/components/bootstrap/forms/Label';
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';

import slug from 'slug';
import { getFileType } from '@/utils/fileType';
import htmlToDraft from 'html-to-draftjs';
import { ContentState } from 'draft-js';
import { EditorState } from 'draft-js';
import Textarea from '@/components/bootstrap/forms/Textarea';

export default function PreviousWorkForm({
	formik,
	setFiles,
	files,
	isUpdate = false,
}: {
	formik: any;
	setFiles: Dispatch<SetStateAction<any[]>>;
	files: any[];
	isUpdate?: Boolean;
}) {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');

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
			formik.setFieldValue('files.set', [...formik.values.files.set, data?.uploadFile?.file]);
		} catch (error) {
			console.log(error);
		}
	};
	const handleCancel = () => setPreviewOpen(false);

	return (
		<>
			<Spin spinning={loadingUpload}>
				<form className='row g-4'>
					<div className='col-md-12'>
						<FormGroup id='title' label='Title'>
							<Input
								type='text'
								size={'lg'}
								value={formik.values.title}
								isTouched={formik.touched.title}
								invalidFeedback={formik.errors.title}
								isValid={formik.isValid}
								onChange={(e: any) => {
									formik.handleChange(e);
									!isUpdate && formik.setFieldValue('slug', slug(e.target.value));
								}}
								onBlur={formik.handleBlur}
								onFocus={() => {
									formik.setErrors({});
								}}
							/>
						</FormGroup>
					</div>
					{!isUpdate && (
						<div className='col-md-12'>
							<FormGroup id='slug' label='Slug'>
								<Input
									type='text'
									size={'lg'}
									value={formik.values.slug}
									isTouched={formik.touched.slug}
									invalidFeedback={formik.errors.slug}
									isValid={formik.isValid}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									onFocus={() => {
										formik.setErrors({});
									}}
								/>
							</FormGroup>
						</div>
					)}
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
							/>
						</FormGroup>
					</div>
					<div className='col-md-12'>
						<FormGroup id='link' label='Link'>
							<Input
								type='text'
								size={'lg'}
								value={formik.values.link}
								isTouched={formik.touched.link}
								invalidFeedback={formik.errors.link}
								isValid={formik.isValid}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								onFocus={() => {
									formik.setErrors({});
								}}
							/>
						</FormGroup>
					</div>
					<div className='col-md-12'>
						<FormGroup id='description' label='Description'>
							<Textarea
								size={'lg'}
								value={formik.values.description}
								isTouched={formik.touched.description}
								invalidFeedback={formik.errors.description}
								isValid={formik.isValid}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								onFocus={() => {
									formik.setErrors({});
								}}
							/>
						</FormGroup>
					</div>
					<div className='col-md-12'>
						<FormGroup label='Feature Medias'>
							<UploadSingleImage
								uploadButton={uploadButton}
								filelist={
									// isUpdate ? updatefiles :

									files
								}
								handlePreview={handlePreview}
								beforeUpload={handleBeforeUploadUpdate}
								handleRemove={(file) => {
									setFiles(files.filter((f) => f.uid !== file.uid)); // Remove file from list on delete

									formik.setFieldValue(
										'files.set',
										formik.values.files.set.filter(
											(f: string) => getImage(f) !== file.url,
										),
									);
								}}
							/>
						</FormGroup>
					</div>
				</form>
			</Spin>
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
		</>
	);
}
