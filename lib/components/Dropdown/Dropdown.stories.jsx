import DropdownItem from "./DropdownItem";
import Dropdown from "./index";

const meta = {
	title: "Components/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: ["top-left", "top-right", "bottom-left", "bottom-right"],
		},
	},
};

export default meta;

export const Default = {
	args: {
		trigger: <button>Toggle Dropdown</button>,
		children: (
			<>
				<DropdownItem>Option 1</DropdownItem>
				<DropdownItem>Option 2</DropdownItem>
				<DropdownItem>Option 3</DropdownItem>
			</>
		),
		position: "top-right",
	},
};

export const CustomTrigger = {
	args: {
		trigger: (
			<button className="p-2 bg-blue-500 text-white rounded-md">
				Click Me
			</button>
		),
		children: (
			<>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Share</DropdownItem>
			</>
		),
		position: "bottom-left",
	},
};

export const WithPositions = {
	render: (args) => (
		<div className="flex flex-col gap-4">
			<Dropdown {...args} position="top-left" />
			<Dropdown {...args} position="top-right" />
			<Dropdown {...args} position="bottom-left" />
			<Dropdown {...args} position="bottom-right" />
		</div>
	),
	args: {
		trigger: <button>Toggle Dropdown</button>,
		children: (
			<>
				<DropdownItem>Option A</DropdownItem>
				<DropdownItem>Option B</DropdownItem>
				<DropdownItem>Option C</DropdownItem>
			</>
		),
	},
};
