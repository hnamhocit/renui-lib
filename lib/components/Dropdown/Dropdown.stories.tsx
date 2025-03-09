import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./index";

const meta: Meta<typeof Dropdown> = {
	title: "Components/Dropdown",
	component: Dropdown,
	argTypes: {
		position: {
			control: "select",
			options: ["top-left", "top-right", "bottom-left", "bottom-right"],
			description: "The position of the dropdown",
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
		trigger: <button>Click Me</button>,
		children: (
			<div>
				<p>Dropdown Item 1</p>
				<p>Dropdown Item 2</p>
				<p>Dropdown Item 3</p>
			</div>
		),
		position: "top-right",
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Default variant
export const Default: Story = {
	args: {
		trigger: <button>Default Trigger</button>,
		children: (
			<div>
				<p>Item 1</p>
				<p>Item 2</p>
				<p>Item 3</p>
			</div>
		),
	},
};

// Different Positions
export const TopLeft: Story = {
	args: {
		position: "top-left",
		trigger: <button>Top Left</button>,
	},
};

export const TopRight: Story = {
	args: {
		position: "top-right",
		trigger: <button>Top Right</button>,
	},
};

export const BottomLeft: Story = {
	args: {
		position: "bottom-left",
		trigger: <button>Bottom Left</button>,
	},
};

export const BottomRight: Story = {
	args: {
		position: "bottom-right",
		trigger: <button>Bottom Right</button>,
	},
};

// Custom Content
export const WithCustomContent: Story = {
	args: {
		trigger: <button>Custom Content</button>,
		children: (
			<div>
				<p>Custom Item 1</p>
				<p>Custom Item 2</p>
				<p>Custom Item 3</p>
			</div>
		),
	},
};

// Combined Variant
export const Combined: Story = {
	args: {
		position: "bottom-right",
		trigger: <button>Combined Example</button>,
		children: (
			<div>
				<p>Combined Item 1</p>
				<p>Combined Item 2</p>
				<p>Combined Item 3</p>
			</div>
		),
	},
};
