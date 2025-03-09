"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Dispatch, FC, memo, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";

import { Color, Size } from "../../types";

interface RadioProps {
	checked: boolean;
	onChecked: Dispatch<SetStateAction<boolean>>;
	size?: Size;
	className?: string;
	description?: string;
	color?: Color;
	classNames?: RadioClassNames;
}

interface RadioClassNames {
	container?: string;
	description?: string;
}

const variants = {
	sizes: {
		lg: "w-7 h-7",
		md: "w-5 h-5",
		sm: "w-4 h-4",
	},
	colors: {
		default: "bg-gray-900 !border-gray-950",
		primary: "bg-blue-600 !border-blue-700",
		secondary: "bg-indigo-600 !border-indigo-700",
		success: "bg-green-600 !border-green-700",
		warning: "bg-amber-600 !border-amber-700",
		danger: "bg-red-600 !border-red-700",
	},
};

const Radio: FC<RadioProps> = ({
	checked,
	onChecked,
	description,
	size = "md",
	className,
	color = "default",
	classNames,
}) => {
	return (
		<div className={clsx("flex items-center gap-2", classNames?.container)}>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => onChecked((prev) => !prev)}
				className={clsx(
					"rounded-full shrink-0 border-2 border-gray-200 flex text-white items-center justify-center shadow transition",
					className,
					checked && variants.colors[color],
					variants.sizes[size],
					className
				)}
			>
				<AnimatePresence>
					{checked && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							exit={{ opacity: 0, scale: 0 }}
							animate={{ scale: 1, opacity: 1 }}
						>
							<FaCheck
								className={clsx(
									variants.sizes[size],
									"scale-50"
								)}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			{description && (
				<div
					className={clsx(
						"text-sm text-gray-500",
						classNames?.description
					)}
				>
					{description}
				</div>
			)}
		</div>
	);
};

export default memo(Radio);
