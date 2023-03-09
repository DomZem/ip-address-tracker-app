import { FC } from 'react';
import { HiChevronRight } from 'react-icons/hi';

type IpAddressFormProps = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const IpAddressForm: FC<IpAddressFormProps> = ({ onSubmit }) => (
	<form className='bg-white shadow-sm flex w-full justify-between max-w-lg rounded-lg' onSubmit={onSubmit}>
		<input className='outline-none flex-1 m-3' type='text' id='ipAddress' name='idAddress' placeholder='Search for any IP address or domain' />
		<button type='submit' className='bg-black duration-200 hover:bg-darkGray flex items-center justify-center p-3 rounded-r-lg'>
			<HiChevronRight className='text-white text-2xl' />
		</button>
	</form>
);

export default IpAddressForm;
