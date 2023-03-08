import IpAddressDataList from './components/oragnisms/IpAddressDataList/IpAddressDataList';
import IpAddressForm from './components/oragnisms/IpAddressForm/IpAddressForm';
import Map from './components/oragnisms/Map/Map';
import { useAddress } from './hooks/useAddress';

const App = () => {
	const { addressData, onHandleSubmit, isError } = useAddress();

	return (
		<main className='h-screen flex flex-col'>
			<section className='h-[300px] bg-hero-pattern-mobile md:bg-hero-pattern-desktop bg-no-repeat bg-cover bg-center p-4 flex flex-col gap-y-3 items-center relative'>
				<h1 className='text-white font-medium text-2xl'>IP Address Tracker</h1>

				<IpAddressForm onHandleSubmit={onHandleSubmit} />
				{addressData ? <IpAddressDataList ipAddressData={addressData} /> : null}
			</section>

			<section className='flex-1 flex justify-center items-center'>
				{addressData ? (
					<Map coordinates={addressData.coordinates} />
				) : (
					<p className='font-medium text-2xl text-center'>{isError ? 'Sorry, something went wrong 😳 Try again!' : `Let's try to find some one 🤭`}</p>
				)}
			</section>
		</main>
	);
};

export default App;
