import Tooltip from "./index"; // Adjust the import path

export default {
	title: "Components/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: [
				"top-right",
				"top-left",
				"bottom-right",
				"bottom-left",
				"top-center",
				"right-center",
				"bottom-center",
				"left-center",
			],
		},
		color: {
			control: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
			],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		variant: {
			control: "select",
			options: ["solid", "border", "flat"],
		},
		rounded: {
			control: "boolean",
		},
	},
};

export const Default = {
	args: {
		children: <button>Hover me</button>,
		content: "This is a tooltip",
	},
};

export const WithCustomPosition = {
	args: {
		children: <button>Hover me</button>,
		content: "This is a tooltip",
		position: "bottom-center",
	},
};

export const WithCustomColor = {
	args: {
		children: <button>Hover me</button>,
		content: "This is a tooltip",
		color: "primary",
	},
};

export const WithCustomSize = {
	args: {
		children: <button>Hover me</button>,
		content: "This is a tooltip",
		size: "lg",
	},
};

export const WithCustomVariant = {
	args: {
		children: <button>Hover me</button>,
		content: "This is a tooltip",
		variant: "border",
	},
};

export const Rounded = {
	args: {
		children: <button>Hover me</button>,
		content: "This is a tooltip",
		rounded: true,
	},
};

export const WithComplexContent = {
	args: {
		children: <button>Hover me</button>,
		content: (
			<div>
				<h3>Tooltip Title</h3>
				<p>
					This is a more complex tooltip with multiple lines of
					content.
				</p>
			</div>
		),
	},
};
