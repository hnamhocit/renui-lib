"use client";

import Avatar from "./index";

export default {
	title: "Components/Avatar",
	component: Avatar,
	argTypes: {
		src: {
			control: "text",
			description: "Image source URL",
		},
		alt: {
			control: "text",
			description: "Image alt text",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "Avatar size",
		},
		color: {
			control: { type: "select" },
			options: [
				"default",
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
			],
			description: "Border color",
		},
		isRounded: {
			control: "boolean",
			description: "Rounded avatar",
		},
		isBordered: {
			control: "boolean",
			description: "Show border",
		},
		isZoom: {
			control: "boolean",
			description: "Enable zoom effect",
		},
		className: {
			control: "text",
			description: "Additional CSS classes",
		},
	},
};

// Sample image URL for testing
const sampleImage = "https://via.placeholder.com/150";

// Template for reusable story instances
const Template = (args) => <Avatar {...args} />;

// Default Avatar
export const Default = Template.bind({});
Default.args = {
	src: sampleImage,
	alt: "Default Avatar",
	size: "md",
	color: "default",
};

// Small Rounded Avatar
export const SmallRounded = Template.bind({});
SmallRounded.args = {
	src: sampleImage,
	alt: "Small Rounded Avatar",
	size: "sm",
	isRounded: true,
};

// Large Bordered Primary Avatar
export const LargeBorderedPrimary = Template.bind({});
LargeBorderedPrimary.args = {
	src: sampleImage,
	alt: "Large Bordered Primary Avatar",
	size: "lg",
	color: "primary",
	isBordered: true,
};

// Medium Success Avatar with Zoom
export const MediumSuccessZoom = Template.bind({});
MediumSuccessZoom.args = {
	src: sampleImage,
	alt: "Medium Success Zoom Avatar",
	size: "md",
	color: "success",
	isZoom: true,
};

// Warning Bordered Rounded Avatar
export const WarningBorderedRounded = Template.bind({});
WarningBorderedRounded.args = {
	src: sampleImage,
	alt: "Warning Bordered Rounded Avatar",
	size: "md",
	color: "warning",
	isBordered: true,
	isRounded: true,
};

// Danger Avatar with Custom Class
export const DangerWithCustomClass = Template.bind({});
DangerWithCustomClass.args = {
	src: sampleImage,
	alt: "Danger Avatar with Custom Class",
	size: "lg",
	color: "danger",
	isBordered: true,
	className: "shadow-lg",
};

// No Image Avatar (Fallback)
export const NoImage = Template.bind({});
NoImage.args = {
	src: undefined,
	alt: "No Image Avatar",
	size: "md",
	color: "default",
	isBordered: true,
};
