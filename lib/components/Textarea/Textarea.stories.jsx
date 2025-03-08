import { useState } from "react";
import Textarea from "./index";

export default {
	title: "Components/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	argTypes: {
		rounded: {
			control: "boolean",
		},
		isError: {
			control: "boolean",
		},
	},
};

export const Default = () => {
	const [value, setValue] = useState("");

	return (
		<Textarea
			value={value}
			onChange={setValue}
			placeholder="Enter your text..."
		/>
	);
};

export const WithLabel = () => {
	const [value, setValue] = useState("");

	return (
		<Textarea
			value={value}
			onChange={setValue}
			label="Description"
			placeholder="Enter your description..."
		/>
	);
};

export const Rounded = () => {
	const [value, setValue] = useState("");

	return (
		<Textarea
			value={value}
			onChange={setValue}
			placeholder="Enter your text..."
			rounded
		/>
	);
};

export const WithError = () => {
	const [value, setValue] = useState("");

	return (
		<Textarea
			value={value}
			onChange={setValue}
			placeholder="Enter your text..."
			isError
			errorMessage="This field is required"
		/>
	);
};

export const AutoResize = () => {
	const [value, setValue] = useState("");

	return (
		<Textarea
			value={value}
			onChange={setValue}
			placeholder="Type to see auto-resize..."
		/>
	);
};
