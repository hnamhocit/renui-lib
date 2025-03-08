import SkeletonLoading from "./index"; // Adjust the import path

export default {
	title: "Components/SkeletonLoading",
	component: SkeletonLoading,
	tags: ["autodocs"],
};

export const Default = {
	args: {
		className: "w-40 h-6",
	},
};

export const Rectangle = {
	args: {
		className: "w-64 h-32",
	},
};

export const Circle = {
	args: {
		className: "w-20 h-20 rounded-full",
	},
};

export const CustomSize = {
	args: {
		className: "w-96 h-12",
	},
};
