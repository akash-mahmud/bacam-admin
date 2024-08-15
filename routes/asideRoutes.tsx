import React from 'react';
import { demoPagesMenu, pageLayoutTypesPagesMenu } from '../menu';
import DefaultAside from '../pages/_layout/_asides/DefaultAside';

const asides = [
	{ path: "auth/login", element: null, exact: true },
	{ path: '/*', element: <DefaultAside />, exact: true },
];

export default asides;
