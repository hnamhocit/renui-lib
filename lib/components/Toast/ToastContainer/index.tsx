"use client";
import { useContext } from "react";
import { createPortal } from "react-dom";

import Toast from "../";
import { ToastContext } from "../../../context/ToastContext";

const ToastContainer = () => {
	const { toasts } = useContext(ToastContext);

	return createPortal(
		<>
			{toasts.map((toast, index) => (
				<Toast key={index} {...toast} />
			))}
		</>,
		document.querySelector("body") as Element
	);
};

export default ToastContainer;
