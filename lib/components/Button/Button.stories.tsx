import type { Meta, StoryObj } from "@storybook/react";
import { FaSearch } from "react-icons/fa";

import Button from "./index"; // Adjust the import path as needed

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the button",
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
			description: "The color variant of the button",
		},
		variant: {
			control: "select",
			options: ["solid", "light", "border", "flat"],
			description: "The style variant of the button",
		},
		isRounded: {
			control: "boolean",
			description: "Whether the button is fully rounded",
		},
		isFullWidth: {
			control: "boolean",
			description: "Whether the button takes up the full width",
		},
		isShadow: {
			control: "boolean",
			description: "Whether the button has a shadow",
		},
		isLoading: {
			control: "boolean",
			description: "Whether the button shows a loading spinner",
		},
		isIconOnly: {
			control: "boolean",
			description: "Whether the button contains only an icon",
		},
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
	},
	args: {
		children: "Click Me",
		size: "md",
		color: "default",
		variant: "solid",
		isRounded: false,
		isFullWidth: false,
		isShadow: false,
		isLoading: false,
		isIconOnly: false,
		disabled: false,
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default variant
export const Default: Story = {
	args: {
		children: "Default Button",
	},
};

// Different Sizes
export const SmallSize: Story = {
	args: {
		size: "sm",
		children: "Small Button",
	},
};

export const MediumSize: Story = {
	args: {
		size: "md",
		children: "Medium Button",
	},
};

export const LargeSize: Story = {
	args: {
		size: "lg",
		children: "Large Button",
	},
};

// Color Variants
export const PrimaryColor: Story = {
	args: {
		color: "primary",
		children: "Primary Button",
	},
};

export const SuccessColor: Story = {
	args: {
		color: "success",
		children: "Success Button",
	},
};

export const WarningColor: Story = {
	args: {
		color: "warning",
		children: "Warning Button",
	},
};

export const DangerColor: Story = {
	args: {
		color: "danger",
		children: "Danger Button",
	},
};

// Variant Styles
export const LightVariant: Story = {
	args: {
		variant: "light",
		children: "Light Button",
	},
};

export const BorderVariant: Story = {
	args: {
		variant: "border",
		children: "Border Button",
	},
};

export const FlatVariant: Story = {
	args: {
		variant: "flat",
		children: "Flat Button",
	},
};

// Rounded and Full Width
export const RoundedButton: Story = {
	args: {
		isRounded: true,
		children: "Rounded Button",
	},
};

export const FullWidthButton: Story = {
	args: {
		isFullWidth: true,
		children: "Full Width Button",
	},
};

// Loading State
export const LoadingButton: Story = {
	args: {
		isLoading: true,
		children: "Loading Button",
	},
};

// Disabled State
export const DisabledButton: Story = {
	args: {
		disabled: true,
		children: "Disabled Button",
	},
};

// Icon Only Button
export const IconOnlyButton: Story = {
	args: {
		isIconOnly: true,
		children: <FaSearch />,
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		size: "lg",
		color: "primary",
		variant: "flat",
		isRounded: true,
		isShadow: true,
		children: "Combined Button",
	},
};
