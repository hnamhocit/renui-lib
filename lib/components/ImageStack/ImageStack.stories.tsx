import type { Meta, StoryObj } from "@storybook/react";
import ImageStack from "./index"; // Importing the component

const meta: Meta<typeof ImageStack> = {
	title: "Components/ImageStack",
	component: ImageStack,
	argTypes: {
		images: {
			control: "object",
			description: "Array of image URLs to display",
		},
		maxImages: {
			control: "number",
			description: "Maximum number of images to display",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
		classNames: {
			control: "object",
			description: "Custom class names for container and text",
		},
	},
	args: {
		images: [
			"https://via.placeholder.com/50",
			"https://via.placeholder.com/60",
			"https://via.placeholder.com/70",
			"https://via.placeholder.com/80",
			"https://via.placeholder.com/90",
			"https://via.placeholder.com/100",
		],
		maxImages: 5,
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof ImageStack>;

// Default variant
export const Default: Story = {
	args: {
		images: [
			"https://via.placeholder.com/50",
			"https://via.placeholder.com/60",
			"https://via.placeholder.com/70",
		],
		maxImages: 3,
	},
};

// With More Images
export const WithMoreImages: Story = {
	args: {
		images: [
			"https://via.placeholder.com/50",
			"https://via.placeholder.com/60",
			"https://via.placeholder.com/70",
			"https://via.placeholder.com/80",
			"https://via.placeholder.com/90",
			"https://via.placeholder.com/100",
		],
		maxImages: 4,
	},
};

// Custom Max Images
export const CustomMaxImages: Story = {
	args: {
		images: [
			"https://via.placeholder.com/50",
			"https://via.placeholder.com/60",
			"https://via.placeholder.com/70",
			"https://via.placeholder.com/80",
			"https://via.placeholder.com/90",
		],
		maxImages: 2,
	},
};

// No Images
export const NoImages: Story = {
	args: {
		images: [],
		maxImages: 5,
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		images: [
			"https://via.placeholder.com/50",
			"https://via.placeholder.com/60",
			"https://via.placeholder.com/70",
			"https://via.placeholder.com/80",
			"https://via.placeholder.com/90",
			"https://via.placeholder.com/100",
		],
		maxImages: 5,
		classNames: {
			container: "border border-gray-300 p-2 rounded-lg",
			text: "text-blue-500 font-semibold",
		},
	},
};
