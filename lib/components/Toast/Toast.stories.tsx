import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import ToastProvider from "../../context/ToastContext"; // Adjust the import path
import Toast from "./index"; // Adjust the import path

const meta: Meta<typeof Toast> = {
	title: "Components/Toast",
	component: Toast,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<ToastProvider>
				<div className="relative h-screen w-full">
					<Story />
				</div>
			</ToastProvider>
		),
	],
	argTypes: {
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
			description: "The color variant of the toast",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the toast",
		},
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
			description: "The position of the toast",
		},
		isRounded: {
			control: "boolean",
			description: "Whether the toast has rounded corners",
		},
		type: {
			control: "select",
			options: ["info", "success", "warning", "danger", null],
			description: "The type of the toast",
		},
		content: {
			control: "text",
			description: "The content displayed inside the toast",
		},
		className: {
			control: "text",
			description: "Custom class name for additional styling",
		},
	},
	args: {
		color: "default",
		size: "md",
		position: "top-right",
		isRounded: false,
		content: "This is a toast message.",
		className: "",
	},
};

export default meta;

type Story = StoryObj<typeof Toast>;

// Default Variant
export const Default: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>Show Toast</button>
				{showToast && <Toast {...args} id={1} />}
			</>
		);
	},
	args: {
		content: "Default Toast Message",
	},
};

// Info Type
export const Info: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>
					Show Info Toast
				</button>
				{showToast && <Toast {...args} id={2} type="info" />}
			</>
		);
	},
	args: {
		content: "This is an info toast.",
		type: "info",
	},
};

// Success Type
export const Success: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>
					Show Success Toast
				</button>
				{showToast && <Toast {...args} id={3} type="success" />}
			</>
		);
	},
	args: {
		content: "This is a success toast.",
		type: "success",
	},
};

// Warning Type
export const Warning: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>
					Show Warning Toast
				</button>
				{showToast && <Toast {...args} id={4} type="warning" />}
			</>
		);
	},
	args: {
		content: "This is a warning toast.",
		type: "warning",
	},
};

// Danger Type
export const Danger: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>
					Show Danger Toast
				</button>
				{showToast && <Toast {...args} id={5} type="danger" />}
			</>
		);
	},
	args: {
		content: "This is a danger toast.",
		type: "danger",
	},
};

// Rounded Variant
export const Rounded: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>
					Show Rounded Toast
				</button>
				{showToast && <Toast {...args} id={6} isRounded />}
			</>
		);
	},
	args: {
		content: "This is a rounded toast.",
		isRounded: true,
	},
};

// Combined Variant
export const Combined: Story = {
	render: (args) => {
		const [showToast, setShowToast] = useState(true);

		return (
			<>
				<button onClick={() => setShowToast(true)}>
					Show Combined Toast
				</button>
				{showToast && (
					<Toast
						{...args}
						id={7}
						type="success"
						size="lg"
						position="bottom-center"
						isRounded
					/>
				)}
			</>
		);
	},
	args: {
		content: "This is a combined toast.",
		type: "success",
		size: "lg",
		position: "bottom-center",
		isRounded: true,
	},
};
