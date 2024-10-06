import React, { FC, ReactNode, useContext, } from 'react';
import { motion, MotionStyle } from 'framer-motion';
import classNames from 'classnames';
import ThemeContext from '../../context/themeContext';
import useAsideTouch from '../../hooks/useAsideTouch';
import useMounted from '../../hooks/useMounted';

interface IAsideHeadProps {
	children: ReactNode;
}
export const AsideHead: FC<IAsideHeadProps> = ({ children }) => {
	return <div className='aside-head'>{children}</div>;
};

interface IAsideBodyProps {
	children: ReactNode;
}
export const AsideBody: FC<IAsideBodyProps> = ({ children }) => {
	return <div className='aside-body'>{children}</div>;
};

interface IAsideFootProps {
	children: ReactNode;
}
export const AsideFoot: FC<IAsideFootProps> = ({ children }) => {
	return <div className='aside-foot'>{children}</div>;
};

interface IAsideProps {
	children: any;
}
const Aside: FC<IAsideProps> = ({ children }) => {
	/**
	 * hooks
	 */
	const { asideStatus } = useContext(ThemeContext);
	const { asideStyle, } = useAsideTouch();
	const { mounted } = useMounted();

	return (
		<>
			<motion.aside
				style={mounted ? (asideStyle as MotionStyle) : undefined}
				className={classNames('aside', {
					open: mounted && asideStatus,

				})}>
				{children}
			</motion.aside>

		</>
	);
};

export default Aside;
