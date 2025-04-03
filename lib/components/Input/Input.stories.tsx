import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index"; // Adjust the import path

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["solid", "bordered", "light", "underlined"],
			description: "The style variant of the input",
		},
		size: {
			control: "select",
			options: ["lg", "md", "sm"],
			description: "The size of the input",
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
			description: "The color variant of the input",
		},
		type: {
			control: "select",
			options: ["text", "password", "email"],
			description: "The type of the input",
		},
		isError: {
			control: "boolean",
			description: "Whether the input is in an error state",
		},
		isRounded: {
			control: "boolean",
			description: "Whether the input is fully rounded",
		},
		errorMessage: {
			control: "text",
			description: "The error message to display when isError is true",
		},
		startIcon: {
			control: "text",
			description: "The icon to display at the start of the input",
		},
		endIcon: {
			control: "text",
			description: "The icon to display at the end of the input",
		},
		isTranslateY: {
			control: "boolean",
			description: "Whether the input is fixed",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default variant
export const Default: Story = {
	args: {
		label: "Username",
		placeholder: "Enter your username",
		variant: "solid",
		size: "md",
		color: "default",
		type: "text",
	},
};

// Password Input
export const WithPassword: Story = {
	args: {
		label: "Password",
		placeholder: "Enter your password",
		type: "password",
		variant: "solid",
		size: "md",
		color: "default",
	},
};

// Error State
export const WithError: Story = {
	args: {
		label: "Email",
		placeholder: "Enter your email",
		isError: true,
		errorMessage: "Invalid email address",
		variant: "solid",
		size: "md",
		color: "danger",
	},
};

// Input with Icons
export const WithIcons: Story = {
	args: {
		label: "Search",
		placeholder: "Search...",
		startIcon: "🔍",
		endIcon: "✖️",
		variant: "solid",
		size: "md",
		color: "default",
	},
};

// Rounded Input
export const Rounded: Story = {
	args: {
		label: "Rounded Input",
		placeholder: "Enter text...",
		isRounded: true,
		variant: "solid",
		size: "md",
		color: "default",
	},
};

// Underlined Variant
export const Underlined: Story = {
	args: {
		label: "Underlined Input",
		placeholder: "Enter text...",
		variant: "underline",
		size: "md",
		color: "default",
	},
};

// Bordered Variant
export const Bordered: Story = {
	args: {
		label: "Bordered Input",
		placeholder: "Enter text...",
		variant: "border",
		size: "md",
		color: "default",
	},
};

// Light Variant
export const Light: Story = {
	args: {
		label: "Light Input",
		placeholder: "Enter text...",
		variant: "light",
		size: "md",
		color: "default",
	},
};

// Custom Color
export const CustomColor: Story = {
	args: {
		label: "Custom Color Input",
		placeholder: "Enter text...",
		color: "primary",
		variant: "solid",
		size: "md",
	},
};
