import { HiChevronRight } from 'react-icons/hi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const App = () => (
	<main>
		<section className='h-[35vh] bg-hero-pattern-mobile md:bg-hero-pattern-desktop bg-no-repeat bg-cover bg-center p-4'>
			<div className='flex flex-col gap-y-4 items-center'>
				<h1 className='text-white font-medium text-2xl'>IP Address Tracker</h1>

				<div className='bg-white flex w-full justify-between max-w-lg rounded-lg'>
					<input className='outline-none flex-1 m-3' type='text' placeholder='Search for any IP address or domain' />
					<button className='bg-black flex items-center justify-center p-3 rounded-r-lg'>
						<HiChevronRight className='text-white text-2xl' />
					</button>
				</div>
			</div>
		</section>
		<MapContainer className='h-[65vh]' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	</main>
);

export default App;
