import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Radio from "./index"; // Adjust the import path

const meta: Meta<typeof Radio> = {
	title: "Components/Radio",
	component: Radio,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the radio button",
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
			description: "The color variant of the radio button",
		},
		description: {
			control: "text",
			description:
				"The description text displayed next to the radio button",
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
		description: "Example description",
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Radio>;

// Default Variant
export const Default: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		description: "Default Radio Button",
	},
};

// Different Sizes
export const SmallSize: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "sm",
		description: "Small Radio Button",
	},
};

export const MediumSize: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "md",
		description: "Medium Radio Button",
	},
};

export const LargeSize: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "lg",
		description: "Large Radio Button",
	},
};

// Color Variants
export const PrimaryColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "primary",
		description: "Primary Radio Button",
	},
};

export const SuccessColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "success",
		description: "Success Radio Button",
	},
};

export const WarningColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "warning",
		description: "Warning Radio Button",
	},
};

export const DangerColor: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		color: "danger",
		description: "Danger Radio Button",
	},
};

// Without Description
export const WithoutDescription: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		description: undefined,
	},
};

// Combined Variant
export const Combined: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChecked={setChecked} />;
	},
	args: {
		size: "lg",
		color: "primary",
		description: "Combined Radio Button",
	},
};
