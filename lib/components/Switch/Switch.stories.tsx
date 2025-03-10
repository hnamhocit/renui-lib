import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Color, Size } from "../../types";
import Switch from "./index";

const meta: Meta<typeof Switch> = {
	title: "Components/Switch",
	component: Switch,
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
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		checked: {
			control: "boolean",
		},
		onChange: {
			action: "onChange",
		},
		icon: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

const Template: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(args.checked);

		const handleOnChange = (newChecked: boolean) => {
			setChecked(newChecked);
			args.onChange?.(newChecked);
		};

		return <Switch {...args} checked={checked} onChange={handleOnChange} />;
	},
};

export const Default: Story = {
	...Template,
	args: {
		checked: false,
		color: "default",
		size: "md",
	},
};

// Color Variants Story
export const Colors: Story = {
	render: () => (
		<div className="flex space-x-4">
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
				<Switch
					key={color}
					color={color}
					checked={false}
					onChange={() => {}}
				/>
			))}
		</div>
	),
};

// Size Variants Story
export const Sizes: Story = {
	render: () => (
		<div className="flex space-x-4">
			{(["sm", "md", "lg"] as Size[]).map((size) => (
				<Switch
					key={size}
					size={size}
					checked={false}
					onChange={() => {}}
				/>
			))}
		</div>
	),
};

export const WithIcon: Story = {
	...Template,
	args: {
		...Default.args,
		icon: <span className="text-xs">⚡</span>,
	},
};

export const CheckedState: Story = {
	...Template,
	args: {
		...Default.args,
		checked: true,
	},
};
