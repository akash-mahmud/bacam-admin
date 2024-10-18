import CategoryTable from '@/common/partial/CategoryTable'
import EmployeeCategoryTable from '@/common/partial/user/employee/category/EmployeeCategoryTable'
import Page from '@/layout/Page/Page'
import PageWrapper from '@/layout/PageWrapper/PageWrapper'
import React from 'react'

export default function page() {
  return (
<PageWrapper>
<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-12'>
						<EmployeeCategoryTable isFluid />
					</div>
				</div>
			</Page>
</PageWrapper>
  )
}
