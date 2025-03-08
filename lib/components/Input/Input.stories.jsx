import Input from "./index"; // Adjust the import path

export default {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["solid", "bordered", "light", "underlined"],
		},
		size: {
			control: "select",
			options: ["lg", "md", "sm"],
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
		type: {
			control: "select",
			options: ["text", "password", "email"],
		},
		isError: {
			control: "boolean",
		},
		isRounded: {
			control: "boolean",
		},
	},
};

export const Default = {
	args: {
		label: "Username",
		placeholder: "Enter your username",
	},
};

export const WithPassword = {
	args: {
		label: "Password",
		type: "password",
		placeholder: "Enter your password",
	},
};

export const WithError = {
	args: {
		label: "Email",
		placeholder: "Enter your email",
		isError: true,
		errorMessage: "Invalid email address",
	},
};

export const WithIcons = {
	args: {
		label: "Search",
		placeholder: "Search...",
		startIcon: <span>🔍</span>,
		endIcon: <span>✖️</span>,
	},
};

export const Rounded = {
	args: {
		label: "Rounded Input",
		placeholder: "Enter text...",
		rounded: true,
	},
};

export const Underlined = {
	args: {
		label: "Underlined Input",
		placeholder: "Enter text...",
		variant: "underlined",
	},
};

export const Bordered = {
	args: {
		label: "Bordered Input",
		placeholder: "Enter text...",
		variant: "bordered",
	},
};

export const Light = {
	args: {
		label: "Light Input",
		placeholder: "Enter text...",
		variant: "light",
	},
};

export const CustomColor = {
	args: {
		label: "Custom Color Input",
		placeholder: "Enter text...",
		color: "primary",
	},
};
