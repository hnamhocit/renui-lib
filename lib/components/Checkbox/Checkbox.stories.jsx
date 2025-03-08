"use client";

import { useState } from "react";
import Checkbox from "./index";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	argTypes: {
		checked: { control: "boolean" },
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
		description: { control: "text" },
		className: { control: "text" },
	},
};

const Template = (args) => {
	const [checked, setChecked] = useState(args.checked);
	return <Checkbox {...args} checked={checked} onChecked={setChecked} />;
};

export const Default = Template.bind({});
Default.args = {
	checked: false,
	size: "md",
	color: "default",
};

export const CheckedPrimary = Template.bind({});
CheckedPrimary.args = {
	checked: true,
	size: "md",
	color: "primary",
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
	checked: false,
	size: "sm",
	color: "secondary",
};

export const LargeSuccessChecked = Template.bind({});
LargeSuccessChecked.args = {
	checked: true,
	size: "lg",
	color: "success",
};

export const WarningWithDescription = Template.bind({});
WarningWithDescription.args = {
	checked: false,
	size: "md",
	color: "warning",
	description: "This is a warning checkbox",
};

export const DangerChecked = Template.bind({});
DangerChecked.args = {
	checked: true,
	size: "md",
	color: "danger",
};
