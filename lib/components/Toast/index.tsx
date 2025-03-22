"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { FC, memo, useContext, useEffect, useRef, useState } from "react";
import { FaCheck, FaInfo, FaSkull, FaTimes } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";

import { IToast, ToastContext } from "../../context/ToastContext";
import Button from "../Button";

const variants = {
	sizes: {
		sm: "p-2 max-w-60",
		md: "py-2 px-4 max-w-80",
		lg: "py-4 px-5 max-w-[400px]",
	},
	positions: {
		"top-right": "top-4 right-4",
		"top-left": "top-4 left-4",
		"bottom-right": "bottom-4 right-4",
		"bottom-left": "bottom-4 left-4",
		"top-center": "top-4 left-1/2 -translate-x-1/2",
		"right-center": "top-1/2 right-4 -translate-y-1/2",
		"bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
		"left-center": "top-1/2 left-4 -translate-y-1/2",
	},
	colors: {
		default: "border-gray-950 bg-gray-900",
		primary: "border-blue-700 bg-blue-600",
		secondary: "border-indigo-700 bg-indigo-600",
		success: "border-green-700 bg-green-600",
		warning: "border-amber-700 bg-amber-600",
		danger: "border-red-700 bg-red-600",
	},
};

const Toast: FC<IToast> = ({
	id,
	color = "default",
	content,
	size = "md",
	position = "top-right",
	className,
	isRounded,
	type,
}) => {
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const [isShow, setIsShow] = useState(true);
	const { removeToast } = useContext(ToastContext);

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			timerRef.current = null;
			setIsShow(false);
			setTimeout(() => {
				removeToast(id!);
			}, 200);
		}, 5000);

		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [id, removeToast]);

	return (
		<AnimatePresence>
			{isShow && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					className={clsx(
						"absolute border rounded-md !text-white shadow-md min-w-24 z-[9999] flex items-center gap-3",
						variants.sizes[size],
						!type && variants.colors[color],
						variants.positions[position],
						type === "info"
							? variants.colors.primary
							: type === "success"
								? variants.colors.success
								: type === "warning"
									? variants.colors.warning
									: type === "danger" &&
										variants.colors.danger,
						isRounded && "!rounded-full",
						className,
					)}
				>
					{type && type === "info" ? (
						<FaInfo />
					) : type === "success" ? (
						<FaCheck />
					) : type === "warning" ? (
						<IoWarning />
					) : (
						type === "danger" && <FaSkull />
					)}

					<div>{content}</div>

					<Button
						isIconOnly
						isRounded
						size="sm"
						variant="light"
						className="!text-white hover:!bg-red-600"
						onClick={() => setIsShow(false)}
					>
						<FaTimes />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default memo(Toast);
