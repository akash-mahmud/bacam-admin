import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface ILogoProps {
	width?: number;
	height?: number;
}
const Logo: FC<ILogoProps> = ({ width = 2155, height = 854 }) => {
	return <Image alt='logo' width={100} height={80} src={'/logo.png'} className=' pt-3' />;
};
Logo.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Logo;
