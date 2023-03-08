import { useState } from 'react';
import { API_URL } from '../api';
import { addressDataType } from '../types/addressData';

export const useAddress = () => {
	const [addressData, setAddressData] = useState<addressDataType | null>(null);
	const [isError, setIsError] = useState(false);

	const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const ipAddress = e.currentTarget['ipAddress'].value;

		fetch(`${API_URL}/${ipAddress}`)
			.then((req) => req.json())
			.then((data) => {
				if (data.status === 'fail') {
					setIsError(true);
					setAddressData(null);
					return;
				} else {
					setAddressData({
						ipAddress: data.query,
						regionName: data.regionName,
						city: data.city,
						zip: data.zip,
						timezone: data.timezone,
						isp: data.isp,
						coordinates: {
							x: data.lat,
							y: data.lon,
						},
					});
				}
			})
			.catch((e) => setIsError(true));
	};

	return {
		addressData,
		onHandleSubmit,
		isError,
	};
};
