export const summaryPageTopMenu = {};

export const dashboardPagesMenu = {};

export const demoPagesMenu = {
	home: {
		id: 'home',
		text: 'Home',
		path: 'home',
		icon: 'Home',
	},
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	product: {
		id: 'product',
		text: 'Product',
		path: 'product',
		icon: 'Store',
		subMenu: {
			view: {
				id: 'all',
				text: 'View',
				path: 'product',
				icon: 'Visibility',
			},
			create: {
				id: 'create',
				text: 'Create',
				path: 'product/create',
				icon: 'AddCircleOutline',
			},
		},
	},
	user: {
		id: 'user',
		text: 'User',
		path: 'User',
		icon: 'Person',
		subMenu: {
			users: {
				id: 'users',
				text: 'Users',
				path: '/user',
				icon: 'People',
			},
			employee: {
				id: 'employee',
				text: 'Employee',
				path: 'user/employee',
				icon: 'Work',
			},
			employeeCategory: {
				id: 'employeeCategory',
				text: 'Category',
				path: 'user/employee/category',
				icon: 'Group',
			},
			employeeSubCategory: {
				id: 'employeeSubCategory',
				text: 'Sub Category',
				path: 'user/employee/category/subcategory',
				icon: 'Layers',
			},
		},
	},
	maincategory: {
		id: 'maincategory',
		text: 'Main Category',
		path: 'maincategory',
		icon: 'Folder',
	},
	category: {
		id: 'category',
		text: 'Category',
		path: 'category',
		icon: 'List',
	},
	orders: {
		id: 'order',
		text: 'Orders',
		path: 'order',
		icon: 'BookOnline',
	},
	partnership: {
		id: 'partnership',
		text: 'Partnership',
		path: 'partnership',
		icon: 'GroupWork',
	},
	news: {
		id: 'news',
		text: 'News',
		path: 'news',
		icon: 'Article',
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
