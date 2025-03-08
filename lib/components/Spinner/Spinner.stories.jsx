import Spinner from "./index";

export default {
	title: "Components/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	argTypes: {
		$width: {
			control: "number",
		},
		$height: {
			control: "number",
		},
		$color: {
			control: "color",
		},
	},
};

export const Default = {
	args: {},
};

export const CustomSize = {
	args: {
		$width: 64,
		$height: 64,
	},
};

export const CustomColor = {
	args: {
		$color: "#ff0000",
	},
};

export const CustomSizeAndColor = {
	args: {
		$width: 80,
		$height: 80,
		$color: "#00ff00",
	},
};
