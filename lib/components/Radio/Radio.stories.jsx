import { useState } from "react";
import Radio from "./index";

export default {
	title: "Components/Radio",
	component: Radio,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["lg", "md", "sm"],
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
		},
	},
};

export const Default = () => {
	const [checked, setChecked] = useState(false);

	return (
		<Radio
			checked={checked}
			onChecked={setChecked}
			description="Default Radio"
		/>
	);
};

export const WithCustomSize = () => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="space-y-4">
			<Radio
				checked={checked}
				onChecked={setChecked}
				size="lg"
				description="Large Radio"
			/>
			<Radio
				checked={checked}
				onChecked={setChecked}
				size="md"
				description="Medium Radio"
			/>
			<Radio
				checked={checked}
				onChecked={setChecked}
				size="sm"
				description="Small Radio"
			/>
		</div>
	);
};

export const WithCustomColor = () => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="space-y-4">
			<Radio
				checked={checked}
				onChecked={setChecked}
				color="primary"
				description="Primary Radio"
			/>
			<Radio
				checked={checked}
				onChecked={setChecked}
				color="secondary"
				description="Secondary Radio"
			/>
			<Radio
				checked={checked}
				onChecked={setChecked}
				color="success"
				description="Success Radio"
			/>
			<Radio
				checked={checked}
				onChecked={setChecked}
				color="warning"
				description="Warning Radio"
			/>
			<Radio
				checked={checked}
				onChecked={setChecked}
				color="danger"
				description="Danger Radio"
			/>
		</div>
	);
};

export const WithAnimation = () => {
	const [checked, setChecked] = useState(false);

	return (
		<Radio
			checked={checked}
			onChecked={setChecked}
			description="Animated Radio"
		/>
	);
};
