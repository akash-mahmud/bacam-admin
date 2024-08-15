export const summaryPageTopMenu = {}

export const dashboardPagesMenu = {}

export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	singlePages: {
		id: 'product',
		text: 'Product',
		path: 'product',
		icon: 'Article',
		subMenu: {
			view:{
				id: 'all',
				text: 'View',
				path: 'product',
				icon: 'ViewArray',
			},
			create: {
				id: 'create',
				text: 'Create',
				path: 'product/create',
				icon: 'ViewArray',
			},
		
		},
	},
	category:{
		id: 'category',
		text: 'Category',
		path: 'category',
		icon: 'Article',
	}



};

export const pageLayoutTypesPagesMenu = {}

export const componentPagesMenu = {}

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
