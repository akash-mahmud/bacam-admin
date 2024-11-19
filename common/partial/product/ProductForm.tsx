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

import { Modal, Spin, UploadFile, Select as AntdSelect, Collapse, List } from 'antd';
import {
	CustomProductStatus,
	ProductType,
	useCategoriesQuery,
	useCreateOneFetaureCategoryMutation,
	useEmployeesQuery,
	useFetaureCategoriesQuery,
	useUpdateOneProductFetaureMutation,
	useUploadFileMutation,
} from '@/graphql/generated/schema';
import { RcFile } from 'antd/es/upload';
import { v4 } from 'uuid';
import { getImage } from '@/utils/getImage';
import Image from 'next/image';
import { uploadButton } from '@/pages/product/create';
import Label from '@/components/bootstrap/forms/Label';
import FetaureCategoryForm from './FetaureCategoryForm';
const { Panel } = Collapse;

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
	const [createFetaureCategory, setcreateFetaureCategory] = useState(false);
	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	const onOpenCreateFetaure = () => {
		setcreateFetaureCategory(true);
	};
	const onCloseCreateFetaure = () => {
		setcreateFetaureCategory(false);
	};
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
		return false;
	};
	const handleCancel = () => setPreviewOpen(false);
	const { data } = useCategoriesQuery();
	const { data: EmployeeData } = useEmployeesQuery();
	const employees = EmployeeData?.employees ?? [];
	const {
		data: FetaureCategoriesData,
		refetch: FetaureCategoriesDatarefetch,
		loading: FetaureCategoriesDataLoading,
	} = useFetaureCategoriesQuery();

	const fetaureCategories = FetaureCategoriesData?.fetaureCategories ?? [];
	const [activeKeys, setActiveKeys] = useState<string[]>([]); // Track active panel keys
	const handleCollapseChange = (key: string | string[]) => {
		if (Array.isArray(key)) {
			setActiveKeys(key); // Update active keys directly when multiple panels can be open
		} else {
			setActiveKeys(
				(prevKeys) =>
					prevKeys.includes(key)
						? prevKeys.filter((k) => k !== key) // Remove key if already active
						: [...prevKeys, key], // Add key if not active
			);
		}
	};
	const [Create, { loading: CreateLoading }] = useCreateOneFetaureCategoryMutation();
	interface ListItem {
		id: string;
		name: string;
		value: string;
	}

	const handleInputChange = (id: string, field: 'name' | 'value', newValue: string) => {
		// Update the specific item in the array
		const updatedItems = formik.values.fetaures.createMany.data.map((item: { id: string }) =>
			item.id === id ? { ...item, [field]: newValue } : item,
		);
		formik.setFieldValue('fetaures.createMany.data', updatedItems);
	};

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
				<div className={' col-md-12 '}>
					<Label>Sizes</Label>
					<AntdSelect
						mode='tags'
						value={formik.values.sizes.set}
						className=' col-md-12'
						onChange={(value: string[]) => {
							formik.setFieldValue('sizes.set', value);
						}}></AntdSelect>
				</div>
				<div className={' col-md-12 '}>
					<Label>Add or create Fetaure categories for this product</Label>
					<AntdSelect
						mode='tags'
						value={formik.values.fetauresCategories.connect?.map(
							(val: { id: any }) => val.id,
						)}
						className=' col-md-12'
						filterOption={(input, option) =>
							option?.children
								// @ts-ignore
								?.toLowerCase()
								.includes(input.toLowerCase())
						}
						onChange={(value: string[]) => {
							formik.setFieldValue(
								'fetauresCategories.connect',
								value?.map((val) => ({ id: val })),
							);
							setActiveKeys(value);
						}}
						onSelect={async (value: string) => {
							let isNewValue = false;
							let newId = '';
							if (!fetaureCategories.some((item) => item.id === value)) {
								const { data } = await Create({
									variables: {
										data: {
											name: value,
										},
									},
								});
								formik.setFieldValue('fetauresCategories.connect', [
									...formik.values.fetauresCategories.connect,
									{ id: data?.createOneFetaureCategory.id },
								]);
								await FetaureCategoriesDatarefetch();
								setActiveKeys((prev) => [
									...prev,
									data?.createOneFetaureCategory?.id ?? '',
								]);
								isNewValue = true;
								newId = data?.createOneFetaureCategory?.id ?? '';
							}
							if (isNewValue && newId) {
								formik.setFieldValue('fetaures.createMany.data', [
									...formik.values.fetaures.createMany.data,
									{
										id: v4(),
										fetaurecategoryId: newId,
										name: '',
										value: '',
									},
								]);
							} else {
								formik.setFieldValue('fetaures.createMany.data', [
									...formik.values.fetaures.createMany.data,
									{
										id: v4(),
										fetaurecategoryId: value,
										name: '',
										value: '',
									},
								]);
							}
						}}>
						{fetaureCategories.map((elem) => (
							<AntdSelect.Option value={elem.id}>{elem.name}</AntdSelect.Option>
						))}
					</AntdSelect>
					<p className=' text-body'>
						You can asign existing fetaures or simply create a new fetaure by typing its
						name
					</p>
				</div>
				{formik.values.fetauresCategories.connect?.length > 0 && (
					<Spin spinning={FetaureCategoriesDataLoading}>
						<div className=' col-md-12'>
							<Collapse activeKey={activeKeys} onChange={handleCollapseChange}>
								{[...fetaureCategories]
									?.filter((obj) =>
										formik.values.fetauresCategories.connect.some(
											(item: { id: string }) => item.id === obj.id,
										),
									)
									?.map((elem) => (
										<Panel
											header={elem.name}
											key={elem.id}
											extra={
												<Button
													className=' btn btn-info'
													onClick={(event: any) => {
														event.stopPropagation();
														formik.setFieldValue(
															'fetaures.createMany.data',
															[
																...formik.values.fetaures.createMany
																	.data,
																{
																	id: v4(),
																	fetaurecategoryId: elem.id,
																	name: '',
																	value: '',
																},
															],
														);
													}}>
													Add
												</Button>
											}>
											<List
												bordered
												dataSource={
													formik.values.fetaures.createMany.data?.filter(
														(curElem: {
															id: string;
															fetaurecategoryId: string;
															name: string;
															value: string;
														}) => curElem.fetaurecategoryId === elem.id,
													) as ListItem[]
												}
												renderItem={(item) => (
													<List.Item>
														<div className=' d-flex justify-content-center align-content-center w-100 gap-2 '>
															<div className=' w-50'>
																<Label>Name</Label>
																<Input
																	value={item.name}
																	onChange={(e: any) => {
																		handleInputChange(
																			item.id,
																			'name',
																			e.target.value,
																		);
																	}}
																/>
															</div>
															<div className=' w-50 '>
																<Label>value</Label>

																<Input
																	value={item.value}
																	onChange={(e: any) =>
																		handleInputChange(
																			item.id,
																			'value',
																			e.target.value,
																		)
																	}
																/>
															</div>
															<div className=' d-flex align-content-center align-items-end'>
																<Button
																	className=' btn btn-danger  '
																	onClick={() => {
																		// prevItems.filter((item) => item.id !== id)
																		const updatedItems =
																			formik.values.fetaures.createMany.data.filter(
																				(elem: {
																					id: string;
																				}) =>
																					elem.id !==
																					item.id,
																			);
																		formik.setFieldValue(
																			'fetaures.createMany.data',
																			updatedItems,
																		);
																	}}>
																	Delete
																</Button>
															</div>
														</div>
													</List.Item>
												)}
											/>
										</Panel>
									))}
							</Collapse>
						</div>
					</Spin>
				)}
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
								// @ts-ignore
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

			<Modal
				open={createFetaureCategory}
				title={''}
				footer={null}
				onCancel={onCloseCreateFetaure}>
				<FetaureCategoryForm
					callBack={async () => {
						onCloseCreateFetaure();
						await FetaureCategoriesDatarefetch();
					}}
				/>
			</Modal>
		</>
	);
}
