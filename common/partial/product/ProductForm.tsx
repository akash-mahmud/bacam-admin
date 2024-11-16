'use client';
import React, { useState } from 'react';
import Select from '@/components/bootstrap/forms/Select';
import Option from '@/components/bootstrap/Option';
import slug from 'slug';
import UploadSingleImage from '@/common/UploadMultipleFiles';
import Input from '@/components/bootstrap/forms/Input';
import Button from '@/components/bootstrap/Button';
import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Textarea from '@/components/bootstrap/forms/Textarea';
import { Modal, Spin, UploadFile } from 'antd';
import {
	CustomProductStatus,
	ProductType,
	useCategoriesQuery,
	useEmployeesQuery,
	useUploadFileMutation,
} from '@/graphql/generated/schema';
import { RcFile } from 'antd/es/upload';
import { v4 } from 'uuid';
import { getImage } from '@/utils/getImage';
import Image from 'next/image';
import { uploadButton } from '@/pages/product/create';

export default function ProductForm({
	formik,
	files,
	setFiles,
	update = false,
	rowClassName = 'col-md-6',
}: {
	formik: any;
	files: any[];
	setFiles: React.Dispatch<React.SetStateAction<any[]>>;
	update?: boolean;
	rowClassName?: string;
}) {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const handlePreview = async (file: UploadFile) => {
		setPreviewImage(file.url as string);
		setPreviewOpen(true);
	};
	const [FileUpload, { loading: loadingUpload }] = useUploadFileMutation();
	const handleBeforeUploadUpdate = async (file: RcFile): Promise<boolean> => {
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
			formik.setFieldValue('images', [...formik.values.images, data?.uploadFile?.file]);
		} catch (error) {
			console.log(error);
		}
		return false
	};
	const handleCancel = () => setPreviewOpen(false);
	const { data } = useCategoriesQuery();
	const { data: EmployeeData } = useEmployeesQuery();
	const employees = EmployeeData?.employees ?? [];

	return (
		<>
			<form className='row g-4' onSubmit={formik.handleSubmit}>
				<div className={rowClassName}>
					<FormGroup id='name' label='Name'>
						<Input
							type='text'
							size={'lg'}
							value={formik.values.name}
							isTouched={formik.touched.name}
							invalidFeedback={formik.errors.name}
							isValid={formik.isValid}
							onChange={(event: any) => {
								formik.handleChange(event);
								formik.setFieldValue('slug', slug(event.target.value));
							}}
							onBlur={formik.handleBlur}
							onFocus={() => {
								formik.setErrors({});
							}}
						/>
					</FormGroup>
				</div>
				{!update && (
					<div className={rowClassName}>
						<FormGroup id='slug' label='slug'>
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
								className=''
							/>
						</FormGroup>
					</div>
				)}
				<div className={rowClassName}>
					<FormGroup id='price' label='price'>
						<Input
							type='text'
							size={'lg'}
							value={formik.values.price}
							isTouched={formik.touched.price}
							invalidFeedback={formik.errors.price}
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

				<div className={rowClassName}>
					<FormGroup id='type' label='type'>
						<Select
							ariaLabel=''
							size={'lg'}
							value={formik.values.type}
							isTouched={formik.touched.type}
							invalidFeedback={formik.errors.type}
							isValid={formik.isValid}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							onFocus={() => {
								formik.setErrors({});
							}}
							className=''>
							{Object.keys(ProductType).map((key) => (
								<Option
									key={key}
									// @ts-ignore
									value={ProductType[key]}>
									{key}
								</Option>
							))}
						</Select>
					</FormGroup>
				</div>
				<div className={rowClassName}>
					<FormGroup id='employee' label='employee'>
						<Select
							ariaLabel=''
							size={'lg'}
							value={formik.values.employee}
							isTouched={formik.touched.employee}
							invalidFeedback={formik.errors.employee}
							isValid={formik.isValid}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							onFocus={() => {
								formik.setErrors({});
							}}
							className=''>
							{employees.map((employee) => (
								<Option key={employee.id} value={employee.id}>
									{employee.name}
								</Option>
							))}
						</Select>
					</FormGroup>
				</div>
				<div className={rowClassName}>
					<FormGroup id='custom_product_status' label='custom_product_status'>
						<Select
							ariaLabel=''
							size={'lg'}
							value={formik.values.custom_product_status}
							isTouched={formik.touched.custom_product_status}
							invalidFeedback={formik.errors.custom_product_status}
							isValid={formik.isValid}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							onFocus={() => {
								formik.setErrors({});
							}}
							className=''>
							{Object.keys(CustomProductStatus).map((key) => (
								<Option
									key={key}
									// @ts-ignore
									value={CustomProductStatus[key]}>
									{key}
								</Option>
							))}
						</Select>
					</FormGroup>
				</div>

				<div className={rowClassName}>
					<FormGroup id='minimumOrderNeededToStart' label='minimumOrderNeededToStart'>
						<Input
							type='text'
							size={'lg'}
							value={formik.values.minimumOrderNeededToStart}
							isTouched={formik.touched.minimumOrderNeededToStart}
							invalidFeedback={formik.errors.minimumOrderNeededToStart}
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

				<div className={rowClassName}>
					<FormGroup id='orderStartPrice' label='orderStartPrice'>
						<Input
							type='text'
							size={'lg'}
							value={formik.values.orderStartPrice}
							isTouched={formik.touched.orderStartPrice}
							invalidFeedback={formik.errors.orderStartPrice}
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
				<div className={rowClassName}>
					<FormGroup id='category.connect.id' label='Category'>
						<Select
							size={'lg'}
							value={formik.values.category.connect.id}
							isTouched={formik.touched.category?.connect?.id}
							invalidFeedback={formik.errors.category?.connect?.id}
							ariaLabel='Select category'
							placeholder='Select category'
							isValid={formik.isValid}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							onFocus={() => {
								formik.setErrors({});
							}}
							className=''>
							{data?.categories?.map((category) => (
								<Option key={category.id} value={category.id}>
									{category.name}
								</Option>
							))}
						</Select>
					</FormGroup>
				</div>
				<div className={rowClassName}>
					<FormGroup id='stock' label='stock'>
						<Input
							type='text'
							size={'lg'}
							value={formik.values.stock}
							isTouched={formik.touched.stock}
							invalidFeedback={formik.errors.stock}
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
				<div className='col-md-12'>
					<FormGroup label='Images'>
						<Spin spinning={loadingUpload}>
							<UploadSingleImage
								uploadButton={uploadButton}
								
								filelist={
									// isUpdate ? updatefiles :

									files
								}
								handlePreview={handlePreview}
								beforeUpload={handleBeforeUploadUpdate}
								handleRemove={(file) => {
									const removedImageArrayForShow = files?.filter(
										(fileData) => fileData.url !== file.url,
									);
									const databaseInput = formik.values.images;
									const removedImageArrayForDatabase = databaseInput?.filter(
										(fileData: string) => getImage(fileData) !== file.url,
									);

									setFiles(removedImageArrayForShow);
									formik.setFieldValue('images', removedImageArrayForDatabase);
								}}
							/>
							{/* <DropZone setFiles={setFiles} files={files}/> */}
						</Spin>
					</FormGroup>
				</div>

				<div className='col-md-12'>
					<FormGroup id='shortdescription' label='shortdescription'>
						<Textarea
							size={'lg'}
							value={formik.values.shortdescription}
							isTouched={formik.touched.shortdescription}
							invalidFeedback={formik.errors.shortdescription}
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
							className=''
						/>
					</FormGroup>
				</div>
				{!update && (
					<div className='cold-md-12'>
						<div className=' d-flex justify-content-end'>
							<Button type='submit' color='primary'>
								Create
							</Button>
						</div>
					</div>
				)}
			</form>
			<Modal open={previewOpen} title={''} footer={null} onCancel={handleCancel}>
				<Image alt='example' height={300} width={500} src={previewImage} />
			</Modal>
		</>
	);
}
