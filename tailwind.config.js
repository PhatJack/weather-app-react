/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'sunny': "url('assets/background/sunnyBg.jpg')",
				'rainy': "url('assets/background/rainyBg.jpg')",
				'lightning': "url('assets/background/lightningBg.jpg')"
			}
		},
	},
	plugins: [],
};