import User from "./index";

export default {
	title: "Components/User",
	component: User,
	tags: ["autodocs"],
	argTypes: {
		isLinkDescription: {
			control: "boolean",
		},
	},
};

export const Default = {
	args: {
		photoURL: "https://via.placeholder.com/150",
		name: "John Doe",
		description: "Software Engineer",
	},
};

export const WithLinkDescription = {
	args: {
		photoURL: "https://via.placeholder.com/150",
		name: "Jane Doe",
		description: "https://example.com",
		isLinkDescription: true,
	},
};

export const WithoutDescription = {
	args: {
		photoURL: "https://via.placeholder.com/150",
		name: "John Smith",
		description: "",
	},
};

export const CustomAvatar = {
	args: {
		photoURL: "https://via.placeholder.com/150",
		name: "Alice Johnson",
		description: "UI/UX Designer",
	},
};
