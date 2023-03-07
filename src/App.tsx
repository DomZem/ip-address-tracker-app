import { HiChevronRight } from 'react-icons/hi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const App = () => {
	return (
		<main className='h-screen flex flex-col'>
			<section className='h-[300px] bg-hero-pattern-mobile md:bg-hero-pattern-desktop bg-no-repeat bg-cover bg-center p-4 flex flex-col gap-y-3 items-center relative'>
				<h1 className='text-white font-medium text-2xl'>IP Address Tracker</h1>

				<div className='bg-white flex w-full justify-between max-w-lg rounded-lg'>
					<input className='outline-none flex-1 m-3' type='text' placeholder='Search for any IP address or domain' />
					<button className='bg-black flex items-center justify-center p-3 rounded-r-lg'>
						<HiChevronRight className='text-white text-2xl' />
					</button>
				</div>

				<ul className='bg-white w-[93.5%] rounded-xl p-4 md:p-6 md:flex-row flex justify-between max-w-6xl flex-col absolute bottom-0 translate-y-1/2 z-20 gap-4'>
					<li className='text-center md:text-left md:border-r flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>ip address</h3>
						<p className='text-xl font-medium mt-2'>192.212.174.101</p>
					</li>

					<li className='text-center md:text-left md:border-r flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>location</h3>
						<p className='text-xl font-medium mt-2'>Brooklyn, NY 10001</p>
					</li>

					<li className='text-center md:text-left md:border-r flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>timezone</h3>
						<p className='text-xl font-medium mt-2'>UTC -05:00</p>
					</li>

					<li className='text-center md:text-left flex-1'>
						<h3 className='uppercase text-slightGray font-medium text-xs'>isp</h3>
						<p className='text-xl font-medium mt-2'>SpaceX Starlink</p>
					</li>
				</ul>
			</section>
			<MapContainer className='flex-1 bg-transparent z-0' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={[51.505, -0.09]} />
			</MapContainer>
		</main>
	);
};

export default App;
