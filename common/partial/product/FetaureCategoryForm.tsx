import Button from '@/components/bootstrap/Button';
import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Input from '@/components/bootstrap/forms/Input';
import {
	useCreateOneFetaureCategoryMutation,
	FetaureCategoryCreateInput,
	CreateOneFetaureCategoryMutation,
	UpdateOneFetaureCategoryMutation,
} from '@/graphql/generated/schema';
import { message, Spin } from 'antd';
import { FormikHelpers, useFormik } from 'formik';
import React from 'react';

export default function FetaureCategoryForm({
	isUpdate = false,
	callBack = () => {},
	getResponse = (
		data:
			| CreateOneFetaureCategoryMutation
			| UpdateOneFetaureCategoryMutation
			| null
			| undefined,
	) => {},
}) {
	const [Create, { loading: CreateLoading }] = useCreateOneFetaureCategoryMutation();
	const createFormik = useFormik({
		async onSubmit<Values extends FetaureCategoryCreateInput>(
			values: FetaureCategoryCreateInput,
			formikHelpers: FormikHelpers<FetaureCategoryCreateInput>,
		) {
			const { data } = await Create({
				variables: {
					data: values,
				},
			});
			callBack();
			getResponse(data);
      message.success("Fetaurte category created")
			return undefined;
		},
		initialValues: {
			name: '',
		},
	});
	const updateFormik = useFormik({
		async onSubmit<Values>(values: Values, formikHelpers: FormikHelpers<Values>) {
			return undefined;
		},
		initialValues: {
			name: '',
			slug: '',
			mainCategory: '',
		},
	});
	return (
		<div>
      <Spin spinning={CreateLoading}>

			<form className='row g-4'>
				<div className='col-md-12'>
			
          <FormGroup id='name' label='name'>
						<Input
							type='text'
							size={'lg'}
							value={createFormik.values.name}
							isTouched={createFormik.touched.name}
							invalidFeedback={createFormik.errors.name}
							isValid={createFormik.isValid}
							onChange={createFormik.handleChange}
							onBlur={createFormik.handleBlur}
							onFocus={() => {
								createFormik.setErrors({});
							}}
							className=''
						/>
					</FormGroup>
				</div>
        <div className=' d-flex justify-content-end'>

				<div className=' col-md-3'>
						<Button color='info' className='w-100' onClick={createFormik.handleSubmit}>
							Save
						</Button>
				</div>
        </div>
			</form>
      </Spin>
		</div>
	);
}
// Powertrain and electronics