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
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Combined Image",
		isZoom: true,
		isRounded: true,
	},
};

// Loading State
export const Loading: Story = {
	render: (args) => {
		return (
			<div>
				<p className="mb-2">Simulating a loading state:</p>
				<Image {...args} />
			</div>
		);
	},
	args: {
		src: undefined, // Simulate no image source to trigger loading state
		alt: "Loading Image",
	},
};
