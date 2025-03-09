import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./index"; // Adjust the import path

const meta: Meta<typeof Spinner> = {
	title: "Components/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	argTypes: {
		$width: {
			control: "number",
			description: "The width of the spinner",
		},
		$height: {
			control: "number",
			description: "The height of the spinner",
		},
		$color: {
			control: "color",
			description: "The color of the spinner",
		},
	},
	args: {
		$width: 48,
		$height: 48,
		$color: "#000",
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

// Default Variant
export const Default: Story = {
	args: {
		$width: 48,
		$height: 48,
		$color: "#000",
	},
};

// Small Size
export const Small: Story = {
	args: {
		$width: 24,
		$height: 24,
		$color: "#000",
	},
};

// Large Size
export const Large: Story = {
	args: {
		$width: 96,
		$height: 96,
		$color: "#000",
	},
};

// Custom Color
export const CustomColor: Story = {
	args: {
		$width: 48,
		$height: 48,
		$color: "#FF5733", // Example custom color
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		$width: 64,
		$height: 64,
		$color: "#3498DB", // Example custom color
	},
};
