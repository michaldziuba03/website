/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'primary': 'rgb(var(--color-primary)  / <alpha-value>)',
				'accent': 'rgb(var(--color-accent)  / <alpha-value>)',
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
