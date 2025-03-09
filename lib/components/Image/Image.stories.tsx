import type { Meta, StoryObj } from "@storybook/react";
import Image from "./index"; // Importing the component

const meta: Meta<typeof Image> = {
	title: "Components/Image",
	component: Image,
	argTypes: {
		src: {
			control: "text",
			description: "The source URL of the image",
		},
		alt: {
			control: "text",
			description: "The alt text for the image",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
		isZoom: {
			control: "boolean",
			description: "Whether the image zooms on hover",
		},
		isRounded: {
			control: "boolean",
			description: "Whether the image is fully rounded",
		},
		classNames: {
			control: "object",
			description: "Custom class names for container",
		},
	},
	args: {
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Example Image",
		className: "",
		isZoom: false,
		isRounded: false,
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Image>;

// Default variant
export const Default: Story = {
	args: {
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Default Image",
	},
};

// Zoom Effect
export const WithZoom: Story = {
	args: {
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Zoomable Image",
		isZoom: true,
	},
};

// Rounded Image
export const Rounded: Story = {
	args: {
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Rounded Image",
		isRounded: true,
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		src: "https://mui.com/static/branding/companies/netflix.svg",
		alt: "Combined Image",
		isZoom: true,
		isRounded: true,
	},
};

// Loading state story
export const LoadingState: Story = {
	args: {
		src: undefined, // Simulate no image source
		alt: "Loading Image",
		placeholder:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhESMIAAAAABJRU5ErkJggg==", // Base64 placeholder
	},
};

// Error state story
export const ErrorState: Story = {
	args: {
		src: "https://invalid.url/image.jpg", // Non-existent image URL
		alt: "Broken Image",
	},
};
