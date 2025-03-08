"use client";

import Accordion from "./index";

export default {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
		label: {
			control: "text",
			description: "The label displayed on the accordion button",
		},
		children: {
			control: "text",
			description: "Content inside the accordion",
		},
	},
};

// Template for reusable story instances
const Template = (args) => <Accordion {...args} />;

// Default Accordion (Closed by Default)
export const Default = Template.bind({});
Default.args = {
	label: "Accordion Title",
	children: (
		<div className="p-4 bg-gray-100">
			This is the default content inside the accordion. Click the button
			to expand or collapse it!
		</div>
	),
};

// Accordion with Long Content
export const LongContent = Template.bind({});
LongContent.args = {
	label: "Accordion with Long Content",
	children: (
		<div className="p-4 bg-gray-100">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</p>
			<p>
				Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
	),
};

// Accordion with Custom Content
export const CustomContent = Template.bind({});
CustomContent.args = {
	label: "Accordion with Custom Content",
	children: (
		<div className="p-4 bg-blue-50">
			<h3 className="text-lg font-semibold">Custom Section</h3>
			<ul className="list-disc pl-5">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
	),
};

// Multiple Accordions (Example with controlled state)
export const MultipleAccordions = () => (
	<div className="space-y-4">
		<Accordion label="Section 1">
			<div className="p-4 bg-gray-100">Content for Section 1</div>
		</Accordion>
		<Accordion label="Section 2">
			<div className="p-4 bg-gray-100">Content for Section 2</div>
		</Accordion>
		<Accordion label="Section 3">
			<div className="p-4 bg-gray-100">Content for Section 3</div>
		</Accordion>
	</div>
);
MultipleAccordions.storyName = "Multiple Accordions";
