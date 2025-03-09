import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";

const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: [
				"top-right",
				"top-left",
				"bottom-right",
				"bottom-left",
				"top-center",
				"right-center",
				"bottom-center",
				"left-center",
			],
			description: "The position of the tooltip",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the tooltip",
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
			description: "The color variant of the tooltip",
		},
		variant: {
			control: "select",
			options: ["solid", "border", "flat"],
			description: "The style variant of the tooltip",
		},
		rounded: {
			control: "boolean",
			description: "Whether the tooltip has rounded corners",
		},
		content: {
			control: "text",
			description: "The content displayed inside the tooltip",
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
		children: <button>Hover Me</button>,
		content: "This is a tooltip",
		position: "top-right",
		size: "md",
		color: "default",
		variant: "solid",
		rounded: false,
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

// Default Variant
export const Default: Story = {
	args: {
		content: "Default Tooltip",
	},
};

// Different Sizes
export const SmallSize: Story = {
	args: {
		size: "sm",
		content: "Small Tooltip",
	},
};

export const MediumSize: Story = {
	args: {
		size: "md",
		content: "Medium Tooltip",
	},
};

export const LargeSize: Story = {
	args: {
		size: "lg",
		content: "Large Tooltip",
	},
};

// Color Variants
export const PrimaryColor: Story = {
	args: {
		color: "primary",
		content: "Primary Tooltip",
	},
};

export const SuccessColor: Story = {
	args: {
		color: "success",
		content: "Success Tooltip",
	},
};

export const WarningColor: Story = {
	args: {
		color: "warning",
		content: "Warning Tooltip",
	},
};

export const DangerColor: Story = {
	args: {
		color: "danger",
		content: "Danger Tooltip",
	},
};

// Variant Styles
export const BorderVariant: Story = {
	args: {
		variant: "border",
		content: "Border Tooltip",
	},
};

export const FlatVariant: Story = {
	args: {
		variant: "flat",
		content: "Flat Tooltip",
	},
};

// Rounded Tooltip
export const Rounded: Story = {
	args: {
		rounded: true,
		content: "Rounded Tooltip",
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		position: "bottom-center",
		size: "lg",
		color: "primary",
		variant: "flat",
		rounded: true,
		content: "Combined Tooltip",
	},
};
