import Image from "./index";

export default {
	title: "Components/Image",
	component: Image,
	tags: ["autodocs"],
	argTypes: {
		isZoom: {
			control: "boolean",
		},
		isRounded: {
			control: "boolean",
		},
	},
};

export const Default = {
	args: {
		src: "https://via.placeholder.com/150",
		alt: "Placeholder Image",
	},
};

export const WithZoom = {
	args: {
		src: "https://via.placeholder.com/150",
		alt: "Placeholder Image",
		isZoom: true,
	},
};

export const Rounded = {
	args: {
		src: "https://via.placeholder.com/150",
		alt: "Placeholder Image",
		isRounded: true,
	},
};

export const RoundedWithZoom = {
	args: {
		src: "https://via.placeholder.com/150",
		alt: "Placeholder Image",
		isRounded: true,
		isZoom: true,
	},
};
