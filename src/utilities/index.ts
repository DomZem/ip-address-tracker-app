export const validateIPAddress = (ipAddress: string): boolean => {
	const ipSegments = ipAddress.split('.');
	if (ipSegments.length !== 4) {
		return false;
	}

	for (const segment of ipSegments) {
		const num = parseInt(segment, 10);
		if (isNaN(num) || num < 0 || num > 255) {
			return false;
		}
		if (num.toString() !== segment) {
			return false;
		}
	}

	return true;
};
