"use client";
import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Toast from "../";
import { ToastContext } from "../../../context/ToastContext";

const ToastContainer = () => {
	const { toasts } = useContext(ToastContext);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// Create a div to hold the toasts
		const container = document.createElement("div");
		container.setAttribute("id", "__toast-container");
		document.body.appendChild(container);
		containerRef.current = container;

		// Cleanup on unmount
		return () => {
			if (containerRef.current) {
				document.body.removeChild(containerRef.current);
			}
		};
	}, []);

	if (!containerRef.current) return null;

	return createPortal(
		<>
			{toasts.map((toast, index) => (
				<Toast key={index} {...toast} />
			))}
		</>,
		containerRef.current
	);
};

export default ToastContainer;
