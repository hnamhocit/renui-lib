import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
	title: "Components/Avatar",
	component: Avatar,
	argTypes: {
		src: {
			control: "text",
			description: "The image source URL",
		},
		alt: {
			control: "text",
			description: "The alt text for the image",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the avatar",
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
			description: "The border color of the avatar",
		},
		isRounded: {
			control: "boolean",
			description: "Whether the avatar is fully rounded",
		},
		isBordered: {
			control: "boolean",
			description: "Whether the avatar has a border",
		},
		isZoom: {
			control: "boolean",
			description: "Whether the avatar zooms on hover",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
	},
	args: {
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Avatar",
		size: "md",
		color: "default",
		isRounded: false,
		isBordered: false,
		isZoom: false,
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Default variant
export const Default: Story = {
	args: {
		src: "https://pbs.twimg.com/media/GlfP3EhbwAIqlbX?format=jpg&name=medium",
		alt: "Default Avatar",
	},
};

// Different Sizes
export const SmallSize: Story = {
	args: {
		size: "sm",
		alt: "Small Avatar",
	},
};

export const MediumSize: Story = {
	args: {
		size: "md",
		alt: "Medium Avatar",
	},
};

export const LargeSize: Story = {
	args: {
		size: "lg",
		alt: "Large Avatar",
	},
};

// Rounded Variant
export const Rounded: Story = {
	args: {
		isRounded: true,
		alt: "Rounded Avatar",
	},
};

// Bordered Variants
export const WithBorder: Story = {
	args: {
		isBordered: true,
		alt: "Bordered Avatar",
	},
};

export const PrimaryBorder: Story = {
	args: {
		isBordered: true,
		color: "primary",
		alt: "Primary Border Avatar",
	},
};

export const SuccessBorder: Story = {
	args: {
		isBordered: true,
		color: "success",
		alt: "Success Border Avatar",
	},
};

// Zoom Variant
export const WithZoom: Story = {
	args: {
		isZoom: true,
		alt: "Zoomable Avatar",
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		size: "lg",
		isRounded: true,
		isBordered: true,
		color: "secondary",
		isZoom: true,
		alt: "Combined Avatar",
	},
};
