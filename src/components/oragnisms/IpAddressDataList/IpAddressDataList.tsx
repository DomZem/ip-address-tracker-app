import { FC } from 'react';
import { addressDataType } from '../../../types/addressData';
import IpAddressDataListItem from '../../atoms/IpAddressDataListItem/IpAddressDataListItem';

type IpAddressDataListProps = {
	ipAddressData: addressDataType;
	errorMessage: string;
};
const IpAddressDataList: FC<IpAddressDataListProps> = ({ ipAddressData, errorMessage }) => {
	const addressData = [
		{
			title: 'ip address',
			value: ipAddressData.ipAddress,
		},
		{
			title: 'location',
			value: `${ipAddressData.city}, ${ipAddressData.regionName} ${ipAddressData.zip}`,
		},
		{
			title: 'timezone',
			value: ipAddressData.timezone,
		},
		{
			title: 'isp',
			value: ipAddressData.isp,
		},
	];

	return (
		<ul className={`bg-white shadow-sm w-[94%] rounded-xl p-4 md:p-6 md:flex-row flex justify-between max-w-6xl flex-col absolute bottom-0 translate-y-1/2 z-20 gap-4`}>
			{!errorMessage ? (
				addressData.map((item, index) => <IpAddressDataListItem key={item.title} title={item.title} value={item.value} isNotLast={index + 1 !== addressData.length} />)
			) : (
				<li className='text-xl font-medium'>{errorMessage}</li>
			)}
		</ul>
	);
};

export default IpAddressDataList;
