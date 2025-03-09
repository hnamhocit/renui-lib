"use client";
import { useContext } from "react";

import Toast from "../";
import { ToastContext } from "../../../context/ToastContext";

const ToastContainer = () => {
	const { toasts } = useContext(ToastContext);

	return toasts.map((toast, index) => <Toast key={index} {...toast} />);
};

export default ToastContainer;
