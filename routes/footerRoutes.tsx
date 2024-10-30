import React from 'react';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';

const footers = [
	{ path: 'auth/login', element: null, exact: true },

	{ path: '/*', element: <DefaultFooter />, exact: true },
];

export default footers;
