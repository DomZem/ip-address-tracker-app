import { useState } from 'react';
import { API_URL } from '../api';

type addressDataType = {
	ipAddress: string;
	regionName: string;
	city: string;
	zip: string;
	timezone: string;
	isp: string;
	position: {
		x: number;
		y: number;
	};
};

export const useAddress = () => {
	const [addressData, setAddressData] = useState<addressDataType | null>(null);

	const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const ipAddress = e.currentTarget['ipAddress'].value;

		fetch(`${API_URL}/${ipAddress}`)
			.then((req) => req.json())
			.then((data) =>
				setAddressData({
					ipAddress: data.query,
					regionName: data.regionName,
					city: data.city,
					zip: data.zip,
					timezone: data.timezone,
					isp: data.isp,
					position: {
						x: data.lat,
						y: data.lon,
					},
				})
			);
		console.log(addressData);
	};

	return {
		addressData,
		onHandleSubmit,
	};
};
