import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the badge",
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
			description: "The color variant of the badge",
		},
		isPing: {
			control: "boolean",
			description: "Whether the badge has a ping animation",
		},
		content: {
			control: "text",
			description: "The content displayed inside the badge",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
		classNames: {
			control: "object",
			description: "Custom class names for container",
		},
	},
	args: {
		children: "Example Content",
		content: "99+",
		size: "md",
		color: "default",
		isPing: false,
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Badge>;

// Default variant
export const Default: Story = {
	args: {
		content: "New",
		children: "Default Badge Example",
	},
};

// Different Sizes
export const SmallSize: Story = {
	args: {
		size: "sm",
		content: "5",
		children: "Small Badge",
	},
};

export const MediumSize: Story = {
	args: {
		size: "md",
		content: "12",
		children: "Medium Badge",
	},
};

export const LargeSize: Story = {
	args: {
		size: "lg",
		content: "99+",
		children: "Large Badge",
	},
};

// Color Variants
export const PrimaryColor: Story = {
	args: {
		color: "primary",
		content: "Alert",
		children: "Primary Badge",
	},
};

export const SuccessColor: Story = {
	args: {
		color: "success",
		content: "Success",
		children: "Success Badge",
	},
};

export const WarningColor: Story = {
	args: {
		color: "warning",
		content: "Warning",
		children: "Warning Badge",
	},
};

export const DangerColor: Story = {
	args: {
		color: "danger",
		content: "Error",
		children: "Danger Badge",
	},
};

// Ping Animation
export const WithPing: Story = {
	args: {
		isPing: true,
		content: "!",
		children: "Ping Badge",
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		size: "lg",
		color: "secondary",
		isPing: true,
		content: "New",
		children: "Combined Badge Example",
	},
};
