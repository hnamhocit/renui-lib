import type { Meta, StoryObj } from "@storybook/react";
import Link from "./index";

const meta: Meta<typeof Link> = {
	title: "Components/Link",
	component: Link,
	argTypes: {
		color: {
			control: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"danger",
				"warning",
				"success",
			],
			description: "Color variant of the link",
		},
		isUnderline: {
			control: "boolean",
			description: "Show underline decoration",
		},
	},
	args: {
		href: "#",
		children: "Example Link",
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Link>;

// Default variant
export const Default: Story = {
	args: {
		color: "default",
		isUnderline: false,
	},
};

// Color variants
export const Primary: Story = { args: { color: "primary" } };
export const Secondary: Story = { args: { color: "secondary" } };
export const Danger: Story = { args: { color: "danger" } };
export const Warning: Story = { args: { color: "warning" } };
export const Success: Story = { args: { color: "success" } };

// Underline variants
export const Underline: Story = {
	args: {
		isUnderline: true,
	},
};

// Combined variant
export const PrimaryUnderline: Story = {
	args: {
		color: "primary",
		isUnderline: true,
	},
};
