import type { Meta, StoryObj } from "@storybook/react";
import User from "./index"; // Adjust the import path

const meta: Meta<typeof User> = {
	title: "Components/User",
	component: User,
	tags: ["autodocs"],
	argTypes: {
		photoURL: {
			control: "text",
			description: "The URL of the user's profile picture",
		},
		name: {
			control: "text",
			description: "The name of the user",
		},
		description: {
			control: "text",
			description: "The description or link associated with the user",
		},
		isLinkDescription: {
			control: "boolean",
			description: "Whether the description is a clickable link",
		},
		classNames: {
			control: "object",
			description:
				"Custom class names for avatar, name, description, and container",
		},
	},
	args: {
		photoURL: "https://via.placeholder.com/50",
		name: "John Doe",
		description: "Software Engineer",
		isLinkDescription: false,
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof User>;

// Default Variant
export const Default: Story = {
	args: {
		photoURL: "https://via.placeholder.com/50",
		name: "Jane Smith",
		description: "Product Designer",
	},
};

// With Link Description
export const WithLinkDescription: Story = {
	args: {
		photoURL: "https://via.placeholder.com/50",
		name: "Alice Johnson",
		description: "https://example.com",
		isLinkDescription: true,
	},
};

// Without Description
export const WithoutDescription: Story = {
	args: {
		photoURL: "https://via.placeholder.com/50",
		name: "Bob Brown",
		description: undefined,
	},
};

// Custom Avatar Size
export const CustomAvatarSize: Story = {
	args: {
		photoURL: "https://via.placeholder.com/80",
		name: "Custom Avatar",
		description: "This user has a larger avatar.",
		classNames: {
			avatar: "w-16 h-16", // Larger avatar size
		},
	},
};

// Rounded Avatar with Zoom
export const RoundedAvatarWithZoom: Story = {
	args: {
		photoURL: "https://via.placeholder.com/50",
		name: "Rounded Avatar",
		description: "This avatar is rounded and zoomable.",
		classNames: {
			avatar: "!rounded-full", // Fully rounded avatar
		},
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		photoURL: "https://via.placeholder.com/50",
		name: "Combined Example",
		description: "https://example.com",
		isLinkDescription: true,
		classNames: {
			container: "bg-gray-100 p-4 rounded-lg shadow-md", // Styled container
			name: "text-blue-700 font-bold", // Custom name style
			description: "text-green-600", // Custom description style
		},
	},
};
