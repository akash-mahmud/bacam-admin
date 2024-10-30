import React, { useContext, useState } from 'react';

import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { dashboardPagesMenu, demoPagesMenu } from '../../../menu';
import ThemeContext from '../../../context/themeContext';

import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);
	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={dashboardPagesMenu} id='aside-dashboard' />
				<NavigationLine />
				<Navigation menu={demoPagesMenu} id='aside-demo-pages' />
			</AsideBody>
			<AsideFoot>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;
