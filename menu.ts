export const summaryPageTopMenu = {};

export const dashboardPagesMenu = {};

export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	product: {
		id: 'product',
		text: 'Product',
		path: 'product',
		icon: 'Article',
		subMenu: {
			view: {
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
	user: {
		id: 'user',
		text: 'User',
		path: 'User',
		icon: 'Article',
		subMenu: {
			users: {
				id: 'users',
				text: 'Users',
				path: '/user',
				icon: 'ViewArray',
			},
			employee: {
				id: 'employee',
				text: 'Employee',
				path: 'user/employee',
				icon: 'ViewArray',
			},
			employeeCategory: {
				id: 'employeeCategory',
				text: 'Category',
				path: 'user/employee/category',
				icon: 'ViewArray',
			},
			employeeSubCategory: {
				id: 'employeeSubCategory',
				text: 'Sub Category',
				path: 'user/employee/category/subcategory',
				icon: 'ViewArray',
			},
		},
	},
	maincategory: {
		id: 'maincategory',
		text: 'Main Category',
		path: 'maincategory',
		icon: 'Article',
	},
	category: {
		id: 'category',
		text: 'Category',
		path: 'category',
		icon: 'Article',
	},
	orders: {
		id: 'order',
		text: 'Orders',
		path: 'order',
		icon: 'BookOnline',
	},
};

export const pageLayoutTypesPagesMenu = {};

export const componentPagesMenu = {};

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
