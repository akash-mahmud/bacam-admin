import React, { FC, useCallback, useContext, useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter, } from 'next/router';
import { useFormik } from 'formik';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext';
import useDarkMode from '../../../hooks/useDarkMode';
import USERS, { getUserDataWithUsername } from '../../../common/data/userDummyData';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Logo from '../../../components/Logo';
import Button from '../../../components/bootstrap/Button';
import Alert from '../../../components/bootstrap/Alert';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Spinner from '../../../components/bootstrap/Spinner';
import { demoPagesMenu } from '../../../menu';
import { USER_COOKIE } from '../../../utils/session';
import { notification, Spin } from 'antd';
import { useAdminLoginMutation } from '@/graphql/generated/schema';




interface ILoginProps {
	isSignUp?: boolean;
}
const Login: NextPage<ILoginProps> = () => {
	const router = useRouter();

	const { authorize } = useContext(AuthContext);

	const { darkModeStatus } = useDarkMode();

	const [signInPassword, setSignInPassword] = useState<boolean>(false);
	// const searchQuery = useSearchParams()
	// const redirectTo = searchQuery?.get("redirectTo")
	const redirectTo = ""
	const [Login, { loading: adminLoginLoading }] = useAdminLoginMutation()
	const handleOnLogin = useCallback(async (values: {
		email: string;
		password: string;
	}) => {
		try {
			const { data } = await Login({
				variables: {
					...values
				}
			})
			if (data?.adminLogin?.success) {
				const { accessToken, user } = data?.adminLogin
				const localStoreVal = {
					token: accessToken
				}
				localStorage.setItem(USER_COOKIE, accessToken ?? "")
				authorize()
				notification.success({
					message:data.adminLogin.message
				})
				if (redirectTo) {
					router.push(redirectTo)
	
				} else {
					router.push('/')
	
				}
				// notification.success({
				//  message:'Logged in'
				// })
			} else {
				console.log(data);
				notification.error({
					message:data?.adminLogin?.message
				})
			}
			// router.push('/')	
		} catch (error) {
			console.log(error);
			
			notification.error({
				message:"Something went wrong!"
			})
		}

	}, [router]);


	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values) => {
			const errors: { email?: string; password?: string } = {};

			if (!values.email) {
				errors.email = 'Required';
			}

			if (!values.password) {
				errors.password = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: async (values: {
			email: string,
			password: string
		}) => {



			await handleOnLogin(values);


		},
	});






	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleContinue = () => {
		setIsLoading(true);
		setTimeout(() => {

			setSignInPassword(true);

			setIsLoading(false);
		}, 1000);
	};

	return (
		<PageWrapper
			isProtected={false}
			className={classNames({ 'bg-dark': true, })}
			
			>
		
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Link
										href='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<Logo width={200} />
									</Link>
								</div>
							

								<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
								<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>

								<Spin spinning={adminLoginLoading}>
									<form className='row g-4'>
								



<div className='col-12 '>
	<FormGroup
		id='email'
		isFloating
		label='Your email or username'
		className={classNames({
			'd-none': signInPassword,
		})}>
		<Input
			autoComplete='username'
			value={formik.values.email}
			isTouched={formik.touched.email}
			invalidFeedback={
				formik.errors.email
			}
			isValid={formik.isValid}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			onFocus={() => {
				formik.setErrors({});
			}}
		/>
	</FormGroup>
	{signInPassword && (
		<div className='text-center h4 mb-3 fw-bold'>
			Hi, {formik.values.email}.
		</div>
	)}
	<FormGroup
		id='password'
		isFloating
		label='Password'
		className={classNames({
			'd-none': !signInPassword,
		})}>
		<Input
			type='password'
			autoComplete='current-password'
			value={formik.values.password}
			isTouched={formik.touched.password}
			invalidFeedback={
				formik.errors.password
			}
			validFeedback='Looks good!'
			isValid={formik.isValid}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
		/>
	</FormGroup>
</div>
<div className='col-12'>
	{!signInPassword ? (
		<Button
			color='warning'
			className='w-100 py-3'
			isDisable={!formik.values.email}
			onClick={handleContinue}>
			{isLoading && (
				<Spinner isSmall inButton isGrow />
			)}
			Continue
		</Button>
	) : (
		<Button
			color='warning'
			className='w-100 py-3'
			onClick={formik.handleSubmit}>
			Login
		</Button>
	)}
</div>



									</form>
								</Spin>
							</CardBody>
						</Card>
						<div className='text-center'>
							<Link
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-dark': true,
								})}>
								Privacy policy
							</Link>
							<Link
								href='/'
								className={classNames('link-light text-decoration-none', {
									'link-dark': true,
								})}>
								Terms of use
							</Link>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Login.propTypes = {
	isSignUp: PropTypes.bool,
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Login;
