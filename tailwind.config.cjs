/** @type {import('tailwindcss').Config} */

const range = require("lodash/range")
const toRem = (px) => `${parseFloat((px / 16).toFixed(6))}rem`

module.exports = {
	prefix: "tw-",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		container: false,
		textOpacity: false,
		borderOpacity: false,
		backgroundOpacity: false,
		backdropFilter: false,
	},
	theme: {
		fontFamily: {
			sans: '"Apercu Pro", sans-serif',
		},
		extend: {
			colors: {
				purple: "#BE0DDB",
			},
			fontSize: {
				...{
					inherit: "inherit",
					124: toRem(124),
				},
				...range(120).reduce(
					(obj, val) => ({
						...obj,
						[val]: toRem(val),
					}),
					{},
				),
			},
			lineHeight: {
				...{
					inherit: "inherit",
				},
				...range(120).reduce(
					(obj, val) => ({
						...obj,
						[val]: toRem(val),
					}),
					{},
				),
			},
			textAlign: ["unset"],
			spacing: {
				...range(1601).reduce(
					(obj, val) => ({
						...obj,
						[val]: toRem(val),
					}),
					{},
				),
				...{
					full: "100%",
					"100vw": "100vw",
					"100vh": "100vh",
				},
			},
			width: {
				...{
					"100vw": "100vw",
					"full-x-16": `calc(100% - ${toRem(16 * 2)})`,
					"full-x-25": `calc(100% - ${toRem(25 * 2)})`,
				},
			},
			maxWidth: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
			minWidth: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
			minHeight: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
			maxHeight: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
		},
	},
}
