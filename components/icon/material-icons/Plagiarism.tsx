import React, { SVGProps } from 'react';

const SvgPlagiarism = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M13 4H6v16h12V9h-5V4zm.97 7.03a3.48 3.48 0 01.59 4.13l1.88 1.88-1.41 1.41-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 010-4.95 3.495 3.495 0 014.95 0z'
				opacity={0.3}
			/>
			<circle cx={11.5} cy={13.5} opacity={0.3} r={1.5} />
			<path d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z' />
			<path d='M9.03 11.03a3.495 3.495 0 000 4.95 3.48 3.48 0 004.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13a3.495 3.495 0 00-4.95 0zm3.53 3.53c-.59.59-1.54.59-2.12 0a1.49 1.49 0 010-2.12 1.49 1.49 0 012.12 0c.59.59.59 1.53 0 2.12z' />
		</svg>
	);
};

export default SvgPlagiarism;
