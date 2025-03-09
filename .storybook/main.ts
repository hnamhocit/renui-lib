import postcss from "postcss";

export default {
	// Adjust path as needed
	stories: ["../lib/**/*.stories.{jsx,tsx}"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: postcss, // Ensure PostCSS is used
				},
			},
		},
		"@chromatic-com/storybook",
	],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	docs: {
		autodocs: true,
	},
};
