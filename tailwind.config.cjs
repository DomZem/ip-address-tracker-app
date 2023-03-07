/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				slightGray: 'sl(0, 0%, 17%)',
				darkGray: 'hsl(0, 0%, 59%)',
			},
		},
	},
	plugins: [],
};
