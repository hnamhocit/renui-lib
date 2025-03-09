import type { Meta, StoryObj } from "@storybook/react";
import SkeletonLoading from "./index"; // Adjust the import path

const meta: Meta<typeof SkeletonLoading> = {
	title: "Components/SkeletonLoading",
	component: SkeletonLoading,
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
	},
	args: {
		className: "",
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof SkeletonLoading>;

// Default Variant
export const Default: Story = {
	args: {
		className: "w-64 h-16",
	},
};

// Small Size
export const Small: Story = {
	args: {
		className: "w-32 h-8",
	},
};

// Medium Size
export const Medium: Story = {
	args: {
		className: "w-48 h-12",
	},
};

// Large Size
export const Large: Story = {
	args: {
		className: "w-96 h-24",
	},
};

// Custom Style
export const CustomStyle: Story = {
	args: {
		className: "w-full h-32 bg-blue-200 rounded-lg shadow-lg",
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		className: "w-64 h-16 bg-green-200 rounded-xl shadow-md",
	},
};
