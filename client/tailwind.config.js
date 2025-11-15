/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					// O definir tus propios colores
					primary: colors.sky[500], // azul
					secondary: colors.slate[600], // violeta
					accent: colors.cyan[600], // verde
					neutral: colors.slate[700], // gris oscuro
					"base-100": "#ffffff", // blanco
					"base-200": colors.slate[100], // gris claro
					"base-300": colors.slate[200], // gris medio
					"base-content": colors.slate[700],
				},
			},
		],
	},
};
