import ImageStack from "./index"; // Adjust the import path

export default {
	title: "Components/ImageStack",
	component: ImageStack,
	tags: ["autodocs"],
	argTypes: {
		maxImages: {
			control: "number",
		},
	},
};

export const Default = {
	args: {
		images: [
			"https://via.placeholder.com/150",
			"https://via.placeholder.com/151",
			"https://via.placeholder.com/152",
			"https://via.placeholder.com/153",
			"https://via.placeholder.com/154",
			"https://via.placeholder.com/155",
		],
		maxImages: 5,
	},
};

export const WithFewerImages = {
	args: {
		images: [
			"https://via.placeholder.com/150",
			"https://via.placeholder.com/151",
		],
		maxImages: 5,
	},
};

export const WithCustomMaxImages = {
	args: {
		images: [
			"https://via.placeholder.com/150",
			"https://via.placeholder.com/151",
			"https://via.placeholder.com/152",
			"https://via.placeholder.com/153",
			"https://via.placeholder.com/154",
			"https://via.placeholder.com/155",
		],
		maxImages: 3,
	},
};

export const Empty = {
	args: {
		images: [],
		maxImages: 5,
	},
};
