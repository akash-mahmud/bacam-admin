import React from 'react';

import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers = [
	{
		path: `/auth/*`,
		element: null,
	},

	{
		path: `/*`,
		element: <DefaultHeader />,
	},
];

export default headers;
