import { FC } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { coordinatesType } from '../../../types/addressData';

type LocationMarkerProps = {
	coordinates: coordinatesType;
};

const LocationMarker: FC<LocationMarkerProps> = ({ coordinates }) => {
	const map = useMap();

	map.flyTo(coordinates);

	return (
		<Marker position={coordinates}>
			<Popup>Your searched ip address is here!</Popup>
		</Marker>
	);
};

export default LocationMarker;
