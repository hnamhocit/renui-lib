"use client";

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from "react";

import ToastContainer from "../components/Toast/ToastContainer";
import { Color, Position, Size } from "../types";

export type ToastType = "info" | "success" | "warning" | "danger";

export interface IToast {
	id?: number;
	color?: Color;
	content: ReactNode;
	position?: Position;
	size?: Size;
	className?: string;
	isRounded?: boolean;
	type?: ToastType;
}

interface IToastContext {
	toasts: IToast[];
	setToasts: Dispatch<SetStateAction<IToast[]>>;
	showToast: (toast: IToast) => void;
	removeToast: (index: number) => void;
}

export const ToastContext = createContext<IToastContext>({
	toasts: [],
	setToasts: () => {},
	showToast: () => {},
	removeToast: () => {},
});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
	const [toasts, setToasts] = useState<IToast[]>([]);

	const showToast = (toast: IToast) => {
		setToasts((prev) => [...prev, { ...toast, id: prev.length }]);
	};

	const removeToast = (id: number) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	};

	return (
		<ToastContext.Provider
			value={{ toasts, setToasts, showToast, removeToast }}
		>
			{children}
			<ToastContainer />
		</ToastContext.Provider>
	);
};

export default ToastProvider;
