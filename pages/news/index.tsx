import NewsTable from '@/common/partial/news/NewsTable';
import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import React from 'react';

export default function index() {
	return (
		<PageWrapper>
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-12'>
						<NewsTable />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
}
