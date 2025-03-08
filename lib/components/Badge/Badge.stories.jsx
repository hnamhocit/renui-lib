import Badge from "./index";

export default {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		children: { control: "text" },
		size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
		color: {
			control: { type: "select" },
			options: [
				"default",
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
			],
		},
		ping: { control: "boolean" },
		content: { control: "text" },
	},
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
	),
	size: "md",
	color: "default",
	content: "3",
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
	children: (
		<span className="inline-block w-6 h-6 bg-gray-200 rounded-full"></span>
	),
	size: "sm",
	color: "primary",
	content: "New",
};

export const LargeSuccessPing = Template.bind({});
LargeSuccessPing.args = {
	children: (
		<span className="inline-block w-10 h-10 bg-gray-200 rounded-full"></span>
	),
	size: "lg",
	color: "success",
	ping: true,
	content: "5",
};

export const WarningNoPing = Template.bind({});
WarningNoPing.args = {
	children: (
		<span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
	),
	size: "md",
	color: "warning",
	ping: false,
	content: "!",
};

export const DangerLarge = Template.bind({});
DangerLarge.args = {
	children: (
		<span className="inline-block w-12 h-12 bg-gray-200 rounded-full"></span>
	),
	size: "lg",
	color: "danger",
	content: "99+",
};
