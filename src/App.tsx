import { HiChevronRight } from 'react-icons/hi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useAddress } from './hooks/useAddress';
const App = () => {
	const { addressData, onHandleSubmit } = useAddress();

	return (
		<main className='h-screen flex flex-col'>
			<section className='h-[300px] bg-hero-pattern-mobile md:bg-hero-pattern-desktop bg-no-repeat bg-cover bg-center p-4 flex flex-col gap-y-3 items-center relative'>
				<h1 className='text-white font-medium text-2xl'>IP Address Tracker</h1>

				<form className='bg-white shadow-sm flex w-full justify-between max-w-lg rounded-lg' onSubmit={onHandleSubmit}>
					<input className='outline-none flex-1 m-3' type='text' id='ipAddress' name='idAddress' placeholder='Search for any IP address or domain' />
					<button type='submit' className='bg-black flex items-center justify-center p-3 rounded-r-lg'>
						<HiChevronRight className='text-white text-2xl' />
					</button>
				</form>

				<ul className='bg-white shadow-sm w-[94%] rounded-xl p-4 md:p-6 md:flex-row flex justify-between max-w-6xl flex-col absolute bottom-0 translate-y-1/2 z-20 gap-4'>
					<li className='text-center md:text-left md:border-r flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>ip address</h3>
						<p className='text-xl font-medium mt-2'>{addressData?.ipAddress}</p>
					</li>

					<li className='text-center md:text-left md:border-r flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>location</h3>
						<p className='text-xl font-medium mt-2'>
							{addressData?.city}, {addressData?.regionName} {addressData?.zip}
						</p>
					</li>

					<li className='text-center md:text-left md:border-r flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>timezone</h3>
						<p className='text-xl font-medium mt-2'>{addressData?.timezone}</p>
					</li>

					<li className='text-center md:text-left flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>isp</h3>
						<p className='text-xl font-medium mt-2'>{addressData?.isp}</p>
					</li>
				</ul>
			</section>
			{addressData && (
				<MapContainer className='flex-1 bg-transparent z-0' center={[addressData.position.x, addressData.position.y]} zoom={13} scrollWheelZoom={false}>
					<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
					<Marker position={[addressData.position.x, addressData.position.y]} />
				</MapContainer>
			)}
		</main>
	);
};

export default App;
