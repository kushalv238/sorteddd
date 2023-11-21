/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				pops: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
}

