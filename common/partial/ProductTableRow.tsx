import React, { FC } from 'react';

import Button from '../../components/bootstrap/Button';

import { Product } from '@/graphql/generated/schema';
import { getImage } from '@/utils/getImage';
import { useRouter } from 'next/router';

interface IProductTableRowProps extends Product {
	selectOnChange: any;
	selectChecked: any;
	selectName: string;
	openUpdateCanvas: (id: string) => void;
}
const ProductTableRow: FC<IProductTableRowProps> = ({
	id,
	images,
	name,
	category,
	minimumOrderNeededToStart,
	type,
	custom_product_status,
	orderStartPrice,
	price,
	stock,
	openUpdateCanvas,
	selectOnChange,
	selectChecked,
	selectName,
}) => {
	const router = useRouter();
	return (
		<tr>
			<td>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={getImage(images[0])} alt={name} width={54} height={54} />
			</td>
			<td>
				<div>
					{name}
					<div className='text-muted'>
						<small>{category.name}</small>
					</div>
				</div>
			</td>

			<td>
				<span>
					{price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</span>
			</td>
			<td>{type}</td>
			<td>{stock}</td>
			<td>{minimumOrderNeededToStart}</td>
			<td>{custom_product_status}</td>
			<td>
				<span>
					{orderStartPrice?.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</span>
			</td>

			<td className='text-end'>
				<Button
					onClick={() => router.push(`/product/update/${id}`)}
					color='dark'
					isLight
					icon='Edit'
					tag='a'
				/>
			</td>
		</tr>
	);
};

export default ProductTableRow;
