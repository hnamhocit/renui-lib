import { useState } from "react";
import Modal from "./index"; // Adjust the import path
import ModalBody from "./ModalBody"; // Adjust the import path
import ModalHeader from "./ModalHeader"; // Adjust the import path

export default {
	title: "Components/Modal",
	component: Modal,
	tags: ["autodocs"],
};

export const Default = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>

			<Modal isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalBody>
					<p>This is the modal content.</p>
				</ModalBody>
			</Modal>
		</div>
	);
};

export const WithCustomContent = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>

			<Modal isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
				<ModalHeader>Custom Modal</ModalHeader>
				<ModalBody>
					<div className="space-y-4">
						<p>This is a custom modal with additional content.</p>
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
};

export const WithAnimation = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>

			<Modal isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
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
};
