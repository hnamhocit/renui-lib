import Toast from "./index";

export default {
	title: "Components/Toast",
	component: Toast,
	tags: ["autodocs"],
	argTypes: {
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
		type: {
			control: "select",
			options: ["info", "success", "warning", "danger"],
		},
		rounded: {
			control: "boolean",
		},
	},
};

export const Default = {
	args: {
		content: "This is a default toast message.",
	},
};

export const WithType = {
	args: {
		content: "This is a success toast message.",
		type: "success",
	},
};

export const WithCustomColor = {
	args: {
		content: "This is a custom-colored toast message.",
		color: "primary",
	},
};

export const WithCustomSize = {
	args: {
		content: "This is a large toast message.",
		size: "lg",
	},
};

export const WithCustomPosition = {
	args: {
		content: "This is a top-center toast message.",
		position: "top-center",
	},
};

export const Rounded = {
	args: {
		content: "This is a rounded toast message.",
		rounded: true,
	},
};

export const WithIcon = {
	args: {
		content: "This is a warning toast message.",
		type: "warning",
	},
};

export const WithCloseButton = {
	args: {
		content: "This toast has a close button.",
	},
};
