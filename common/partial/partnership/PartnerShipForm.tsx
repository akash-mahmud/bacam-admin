import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Input from '@/components/bootstrap/forms/Input';
import { Modal, Select, Spin, UploadFile } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import UploadSingleImage from '@/common/UploadMultipleFiles';
import { uploadButton } from '@/pages/product/create';
import { v4 } from 'uuid';
import { getImage } from '@/utils/getImage';
import { useUploadFileMutation } from '@/graphql/generated/schema';
import { RcFile } from 'antd/es/upload';
import { ModalBody } from '@/components/bootstrap/Modal';
import Image from 'next/image';
import { FormikProps } from 'formik';

export default function PartnerShipForm({
	formik,
	setFiles,
	files,
}: {
	formik: any;
	setFiles: Dispatch<SetStateAction<any[]>>;
	files: any[];
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
			formik.setFieldValue('logo', data?.uploadFile?.file);
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
						<FormGroup id='name' label='Name'>
							<Input
								type='text'
								size={'lg'}
								value={formik.values.name}
								isTouched={formik.touched.name}
								invalidFeedback={formik.errors.name}
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
						<FormGroup label='Logo'>
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
						</FormGroup>
					</div>
				</form>
			</Spin>
			<Modal open={previewOpen} footer={null} onCancel={handleCancel}>
				<ModalBody>
					<div className='d-flex justify-content-center'>
						<Image alt='example' height={300} width={300} src={previewImage} />
					</div>
				</ModalBody>
			</Modal>
		</>
	);
}
