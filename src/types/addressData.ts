export type addressDataType = {
	ipAddress: string;
	regionName: string;
	city: string;
	zip: string;
	timezone: string;
	isp: string;
	coordinates: coordinatesType;
};

export type coordinatesType = {
	lat: number;
	lng: number;
};
