import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { API_URL } from './api';
import LocationMarker from './components/atoms/LocationMarker/LocationMarker';
import IpAddressDataList from './components/oragnisms/IpAddressDataList/IpAddressDataList';
import IpAddressForm from './components/oragnisms/IpAddressForm/IpAddressForm';
import { addressDataType } from './types/addressData';
import { validateIPAddress } from './utilities';

export const initialIpAddressData: addressDataType = {
	ipAddress: '192.212.174.101',
	regionName: 'California',
	city: 'Rosemead',
	zip: '91770',
	timezone: 'America/Los_Angeles',
	isp: 'Southern California Edison',
	coordinates: {
		lat: 34.0648,
		lng: -118.086,
	},
};

export type responseStatus = 'fail' | 'success';

const App = () => {
	const [ipAddressData, setIpAddressData] = useState<addressDataType>(initialIpAddressData);
	const [errorMessage, setErrorMessage] = useState('');

	const handleSearchIpData = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const ipAddress = e.currentTarget['ipAddress'].value;

		if (ipAddressData.ipAddress === ipAddress) {
			return;
		}

		const isCorrect = validateIPAddress(ipAddress);

		if (isCorrect) {
			setErrorMessage('');
			try {
				const request = await fetch(`${API_URL}/${ipAddress}`);
				if (request.ok) {
					const response = await request.json();
					setIpAddressData({
						ipAddress: response.query,
						coordinates: {
							lat: response.lat,
							lng: response.lon,
						},
						...response,
					});
				} else {
					setErrorMessage('Something went wrong. Try later!');
				}
			} catch (e) {
				setErrorMessage('Something went wrong. Try later!');
			}
		} else {
			setErrorMessage('Invalid ip address!');
		}
	};
	return (
		<main className='h-screen flex flex-col'>
			<section className='h-[300px] bg-hero-pattern-mobile md:bg-hero-pattern-desktop bg-no-repeat bg-cover bg-center p-4 flex flex-col gap-y-3 items-center relative'>
				<h1 className='text-white font-medium text-2xl'>IP Address Tracker</h1>

				<IpAddressForm onSubmit={handleSearchIpData} />
				<IpAddressDataList ipAddressData={ipAddressData} errorMessage={errorMessage} />
			</section>

			<section className='flex-1 flex justify-center items-center'>
				<MapContainer className='z-0 h-full flex-1' center={ipAddressData.coordinates} zoom={15} scrollWheelZoom={false}>
					<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
					{!errorMessage ? <LocationMarker coordinates={ipAddressData.coordinates} /> : null}
				</MapContainer>
			</section>
		</main>
	);
};

export default App;
