import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Checkbox from "./index"; // Importing the component

const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the checkbox",
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
			description: "The color variant of the checkbox",
		},
		isError: {
			control: "boolean",
			description: "Whether the checkbox is in an error state",
		},
		description: {
			control: "text",
			description: "The description text displayed next to the checkbox",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
		classNames: {
			control: "object",
			description: "Custom class names for container and description",
		},
	},
	args: {
		checked: false,
		size: "md",
		color: "default",
		isError: false,
		description: "Example description",
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Default variant
export const Default: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		description: "Default Checkbox",
	},
};

// Different Sizes
export const SmallSize: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "sm",
		description: "Small Checkbox",
	},
};

export const MediumSize: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "md",
		description: "Medium Checkbox",
	},
};

export const LargeSize: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "lg",
		description: "Large Checkbox",
	},
};

// Color Variants
export const PrimaryColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "primary",
		description: "Primary Checkbox",
	},
};

export const SuccessColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "success",
		description: "Success Checkbox",
	},
};

export const WarningColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "warning",
		description: "Warning Checkbox",
	},
};

export const DangerColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "danger",
		description: "Danger Checkbox",
	},
};

// Error State
export const ErrorState: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		isError: true,
		description: "Error Checkbox",
	},
};

// Without Description
export const WithoutDescription: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		description: undefined,
	},
};

// Combined Variant
export const Combined: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "lg",
		color: "primary",
		isError: false,
		description: "Combined Checkbox",
	},
};
