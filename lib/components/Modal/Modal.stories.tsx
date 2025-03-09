import { useState } from "react";

import Modal from "./index"; // Adjust the import path
import ModalBody from "./ModalBody"; // Adjust the import path
import ModalHeader from "./ModalHeader"; // Adjust the import path

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	tags: ["autodocs"],
	argTypes: {
		isOpen: {
			control: "boolean",
			description: "Whether the modal is open",
		},
		onOpenChange: {
			action: "onOpenChange",
			description: "Callback when the modal's open state changes",
		},
		children: {
			control: "text",
			description: "The content of the modal",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

// Default Variant
export const Default: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open Modal</button>

				<Modal
					{...args}
					isOpen={isOpen}
					onOpenChange={() => setIsOpen(false)}
				>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalBody>
						<p>This is the modal content.</p>
					</ModalBody>
				</Modal>
			</div>
		);
	},
};

// With Custom Content
export const WithCustomContent: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open Modal</button>

				<Modal
					{...args}
					isOpen={isOpen}
					onOpenChange={() => setIsOpen(false)}
				>
					<ModalHeader>Custom Modal</ModalHeader>
					<ModalBody>
						<div className="space-y-4">
							<p>
								This is a custom modal with additional content.
							</p>
							<button
								onClick={() => setIsOpen(false)}
								className="p-2 bg-blue-500 text-white rounded-md"
							>
								Close Modal
							</button>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	},
};

// With Animation
export const WithAnimation: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open Modal</button>

				<Modal
					{...args}
					isOpen={isOpen}
					onOpenChange={() => setIsOpen(false)}
				>
					<ModalHeader>Animated Modal</ModalHeader>
					<ModalBody>
						<p>
							This modal has a smooth animation when opening and
							closing.
						</p>
					</ModalBody>
				</Modal>
			</div>
		);
	},
};
