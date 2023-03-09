import { FC } from 'react';

type IpAddressDataListItemProps = {
	title: string;
	value: string | number;
	isNotLast: boolean;
};

const IpAddressDataListItem: FC<IpAddressDataListItemProps> = ({ title, value, isNotLast }) => (
	<li className={`text-center md:text-left ${isNotLast && 'md:border-r'} flex-1`}>
		<h3 className='uppercase text-slightGray font-medium text-xs'>{title}</h3>
		<p className='text-xl font-medium mt-2'>{value}</p>
	</li>
);

export default IpAddressDataListItem;
