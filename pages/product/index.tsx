import React, { useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Card, { CardBody } from '@/components/bootstrap/Card';

import Icon from '@/components/icon/Icon';

import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';

import { useProductsQuery } from '@/graphql/generated/schema';
import ProductTableRow from '@/common/partial/ProductTableRow';





const Index: NextPage = () => {




	const { data } = useProductsQuery()
	const products = data?.products ?? []
	return (
		<PageWrapper>

			<Page>
				<Card stretch data-tour='list'>

					<CardBody className='table-responsive' isScrollable>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>

									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th
										scope='col'
										className='cursor-pointer text-decoration-underline'>
										Price{' '}
										<Icon
											size='lg'
											icon='FilterList'
										/>
									</th>
									<th scope='col'>type</th>
									<th scope='col'>minimumOrderNeededToStart</th>
									<th scope='col'>custom_product_status</th>
									<th scope='col'>orderStartPrice</th>

								
									<th scope='col' className='text-end'>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((i) => (
									<ProductTableRow
										key={i.id}
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...i}
										selectName='selectedList'

									/>
								))}
							</tbody>
						</table>
					</CardBody>

				</Card>
			</Page>
		</PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
