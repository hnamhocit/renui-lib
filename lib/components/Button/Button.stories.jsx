"use client";

import Button from "./index";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
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
		variant: {
			control: { type: "select" },
			options: ["solid", "light", "ghost", "flat"],
		},
		isRounded: { control: "boolean" },
		isFullWidth: { control: "boolean" },
		isShadow: { control: "boolean" },
		isLoading: { control: "boolean" },
		isIconOnly: { control: "boolean" },
		disabled: { control: "boolean" },
		children: { control: "text" },
		onClick: { action: "clicked" },
	},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: "md",
	color: "default",
	variant: "solid",
	children: "Default Button",
};

export const PrimarySolid = Template.bind({});
PrimarySolid.args = {
	size: "md",
	color: "primary",
	variant: "solid",
	children: "Primary Solid",
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
	size: "md",
	color: "secondary",
	variant: "ghost",
	children: "Secondary Ghost",
};

export const SuccessFlatRounded = Template.bind({});
SuccessFlatRounded.args = {
	size: "md",
	color: "success",
	variant: "flat",
	isRounded: true,
	children: "Success Flat",
};

export const WarningLightShadow = Template.bind({});
WarningLightShadow.args = {
	size: "lg",
	color: "warning",
	variant: "light",
	isShadow: true,
	children: "Warning Light",
};

export const DangerFullWidth = Template.bind({});
DangerFullWidth.args = {
	size: "md",
	color: "danger",
	variant: "solid",
	isFullWidth: true,
	children: "Danger Full Width",
};

export const SmallLoading = Template.bind({});
SmallLoading.args = {
	size: "sm",
	color: "primary",
	variant: "solid",
	isLoading: true,
	children: "Loading...",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
	size: "md",
	color: "default",
	variant: "solid",
	isIconOnly: true,
	children: "★",
};

export const Disabled = Template.bind({});
Disabled.args = {
	size: "md",
	color: "default",
	variant: "solid",
	disabled: true,
	children: "Disabled Button",
};
