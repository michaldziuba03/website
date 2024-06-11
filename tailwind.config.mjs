/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'primary': 'rgb(var(--color-primary)  / <alpha-value>)',
				'accent': '#A9D7DA',
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
