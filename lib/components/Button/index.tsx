"use client";

import clsx from "clsx";
import { HTMLMotionProps, motion } from "motion/react";
import { FC, memo, useMemo } from "react";

import { Color, Size } from "../../types";
import Spinner from "../Spinner";

export type ButtonVariant = "solid" | "light" | "border" | "flat";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
	size?: Size;
	color?: Color;
	isRounded?: boolean;
	isFullWidth?: boolean;
	isShadow?: boolean;
	isLoading?: boolean;
	isIconOnly?: boolean;
	variant?: ButtonVariant;
}

const variants = {
	colors: {
		default:
			"bg-gray-900 shadow-gray-900/50 hover:bg-gray-950 hover:border-gray-900 hover:text-gray-900",
		primary:
			"bg-blue-600 shadow-blue-600/50 hover:bg-blue-700 hover:border-blue-600 hover:text-blue-600 text-blue-600",
		secondary:
			"bg-indigo-600 shadow-indigo-600/50 hover:bg-indigo-700 hover:border-indigo-600 hover:text-indigo-600 text-indigo-600",
		success:
			"bg-green-600 shadow-green-600/50 hover:bg-green-700 hover:border-green-600 hover:text-green-600 text-green-600",
		warning:
			"bg-amber-600 shadow-amber-600/50 hover:bg-amber-700 hover:border-amber-600 hover:text-amber-600 text-amber-600",
		danger: "bg-red-600 shadow-red-600/50 hover:bg-red-700 hover:border-red-600 hover:text-red-600 text-red-600",
	},
	variants: {
		solid: "!text-white",
		light: "!bg-transparent",
		border: "bg-transparent border-2 hover:!text-white",
		flat: {
			default:
				"!text-white !bg-gray-600 !shadow-gray-600/50 hover:!bg-gray-700",
			primary:
				"!text-white !bg-blue-400 !shadow-blue-400/50 hover:!bg-blue-500",
			secondary:
				"!text-white !bg-indigo-400 !shadow-indigo-400/50 hover:!bg-indigo-500",
			success:
				"!text-white !bg-green-400 !shadow-green-400/50 hover:!bg-green-500",
			warning:
				"!text-white !bg-amber-400 !shadow-amber-400/50 hover:!bg-amber-500",
			danger: "!text-white !bg-red-400 !shadow-red-400/50 hover:!bg-red-500",
		},
	},
};

const Button: FC<ButtonProps> = ({
	size = "md",
	color = "default",
	variant = "solid",
	isRounded,
	isFullWidth,
	isShadow,
	isIconOnly,
	isLoading,
	...props
}) => {
	const sizes = useMemo(
		() => ({
			lg: isIconOnly ? "p-3" : "text-lg py-3 px-6",
			md: isIconOnly ? "p-2" : "py-2 px-4",
			sm: isIconOnly ? "p-1" : "text-sm py-1 px-2",
		}),
		[isIconOnly]
	);

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, opacity: 0.9 }}
			className={clsx(
				"flex items-center justify-center rounded-md gap-3 font-medium",
				sizes[size],
				variants.colors[color],
				variant === "flat"
					? variants.variants[variant][color]
					: variants.variants[variant],
				(isRounded || isIconOnly) && "!rounded-full",
				isFullWidth && "flex-1 w-full",
				isShadow && "!shadow-md",
				props.disabled && "opacity-30 !cursor-not-allowed",
				props.className
			)}
			{...props}
		>
			{isLoading && <Spinner $color="#FFF" $height={24} $width={24} />}
			{props.children as React.ReactNode}
		</motion.button>
	);
};

export default memo(Button);
