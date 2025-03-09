import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./index";

const meta: Meta<typeof Accordion> = {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
		label: {
			control: "text",
			description: "The label displayed on the accordion trigger",
		},
		children: {
			control: "text",
			description: "The content inside the accordion",
		},
		classNames: {
			control: "object",
			description: "Custom class names for container and trigger",
		},
		className: {
			control: "text",
			description: "Custom class name for the accordion content",
		},
	},
	args: {
		label: "Accordion Label",
		children: "This is the content of the accordion.",
		classNames: {
			container: "border border-gray-300 rounded-md",
			trigger: "bg-gray-100 hover:bg-gray-200",
		},
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Default variant
export const Default: Story = {
	args: {
		label: "Click to Expand",
		children: "This is the content of the accordion.",
	},
};

// Custom class names
export const WithCustomClassNames: Story = {
	args: {
		label: "Custom Styled Accordion",
		children: "This accordion has custom styles applied.",
		classNames: {
			container: "border-2 border-blue-500 rounded-lg shadow-md",
			trigger: "bg-blue-100 text-blue-800 hover:bg-blue-200",
		},
	},
};

// Long content example
export const WithLongContent: Story = {
	args: {
		label: "Accordion with Long Content",
		children: (
			<>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</>
		),
	},
};
