/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				slightGray: 'hsl(0, 0%, 17%)',
				darkGray: 'hsl(0, 0%, 59%)',
			},
			backgroundImage: {
				'hero-pattern-mobile': "url('./src/assets/images/pattern-bg-mobile.png')",
				'hero-pattern-desktop': "url('./src/assets/images/pattern-bg-desktop.png')",
			},
		},
	},
	plugins: [],
};
