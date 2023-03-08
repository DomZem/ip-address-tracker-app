import { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type MapProps = {
	coordinates: {
		x: number;
		y: number;
	};
};

const Map: FC<MapProps> = ({ coordinates }) => {
	return (
		<MapContainer className='z-0 h-full flex-1' center={{ lat: coordinates.x, lng: coordinates.y }} zoom={20} scrollWheelZoom={false}>
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			<Marker position={{ lat: coordinates.x, lng: coordinates.y }} />
		</MapContainer>
	);
};
export default Map;
