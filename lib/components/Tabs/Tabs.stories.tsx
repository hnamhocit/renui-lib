import { Meta, StoryObj } from "@storybook/react";

import { Color } from "../../types";
import Tabs from "./index";

const meta: Meta<typeof Tabs> = {
	title: "Components/Tabs",
	component: Tabs,
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
		},
		data: {
			control: false, // Disable control for complex data
		},
	},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Template: Story = {
	render: (args) => <Tabs {...args} />,
};

// Default story with basic tabs
export const Default: Story = {
	...Template,
	args: {
		color: "default",
		data: [
			{
				title: "Tab 1",
				children: <div>Content for Tab 1</div>,
			},
			{
				title: "Tab 2",
				children: <div>Content for Tab 2</div>,
			},
		],
	},
};

// Color variants story
export const Colors: Story = {
	render: () => (
		<div className="space-y-6">
			{(
				[
					"default",
					"primary",
					"secondary",
					"success",
					"warning",
					"danger",
				] as Color[]
			).map((color) => (
				<div key={color}>
					<h3 className="mb-2">{color} tabs</h3>
					<Tabs
						color={color}
						data={[
							{
								title: "Tab 1",
								children: <div>Content 1</div>,
							},
							{
								title: "Tab 2",
								children: <div>Content 2</div>,
							},
						]}
					/>
				</div>
			))}
		</div>
	),
};

// Story with dynamic content
export const DynamicContent: Story = {
	...Template,
	args: {
		color: "primary",
		data: [
			{
				title: "Profile",
				children: (
					<div className="p-4 space-y-2">
						<h3>User Profile</h3>
						<p>Name: John Doe</p>
						<p>Email: john@example.com</p>
					</div>
				),
			},
			{
				title: "Settings",
				children: (
					<div>
						<h3>Account Settings</h3>
						<button className="bg-blue-500 text-white px-4 py-2 rounded">
							Edit Profile
						</button>
					</div>
				),
			},
			{
				title: "Notifications",
				children: <div>🔔 Notification content here</div>,
			},
		],
	},
};

// Story with many tabs to show scrolling
export const ManyTabs: Story = {
	...Template,
	args: {
		color: "success",
		data: Array.from({ length: 10 }, (_, i) => ({
			title: `Tab ${i + 1}`,
			children: <div>Content {i + 1}</div>,
		})),
	},
};
