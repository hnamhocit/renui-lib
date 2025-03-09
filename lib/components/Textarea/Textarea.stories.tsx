import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Textarea from "./index"; // Adjust the import path

const meta: Meta<typeof Textarea> = {
	title: "Components/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: "text",
			description: "The current value of the textarea",
		},
		placeholder: {
			control: "text",
			description: "The placeholder text for the textarea",
		},
		rounded: {
			control: "boolean",
			description: "Whether the textarea has rounded corners",
		},
		isError: {
			control: "boolean",
			description: "Whether the textarea is in an error state",
		},
		label: {
			control: "text",
			description: "The label for the textarea",
		},
		errorMessage: {
			control: "text",
			description: "The error message to display when isError is true",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
		classNames: {
			control: "object",
			description: "Custom class names for container and label",
		},
	},
	args: {
		value: "",
		placeholder: "Enter your text here...",
		rounded: false,
		isError: false,
		label: "Label",
		errorMessage: "This field is required.",
		className: "",
		classNames: {},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Textarea>;

// Default Variant
export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<Textarea
				{...args}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			/>
		);
	},
	args: {
		label: "Default Textarea",
	},
};

// Rounded Variant
export const Rounded: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<Textarea
				{...args}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			/>
		);
	},
	args: {
		label: "Rounded Textarea",
		rounded: true,
	},
};

// Error State
export const WithError: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<Textarea
				{...args}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			/>
		);
	},
	args: {
		label: "Error Textarea",
		isError: true,
		errorMessage: "Invalid input!",
	},
};

// Custom Placeholder
export const WithPlaceholder: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<Textarea
				{...args}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			/>
		);
	},
	args: {
		label: "Textarea with Placeholder",
		placeholder: "Type something...",
	},
};

// Combined Variant
export const Combined: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<Textarea
				{...args}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			/>
		);
	},
	args: {
		label: "Combined Textarea",
		placeholder: "Type something...",
		rounded: true,
		isError: true,
		errorMessage: "This field is required.",
		className: "bg-blue-100 text-blue-800",
	},
};
