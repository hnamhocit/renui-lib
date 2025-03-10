"use client";

import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC, memo, ReactNode, useMemo } from "react";

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

const baseStyles =
	"flex items-center justify-center rounded-md gap-3 font-medium";

const sizeStyles: Record<Size, string> = {
	lg: "text-lg py-3 px-6",
	md: "py-2 px-4",
	sm: "text-sm py-1 px-2",
};

const iconSizeStyles: Record<Size, string> = {
	lg: "p-3",
	md: "p-2",
	sm: "p-1",
};

const variantStyles: Record<ButtonVariant, Record<Color, string>> = {
	solid: {
		default: "bg-gray-900 text-white hover:bg-gray-950 shadow-gray-900/50",
		primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/50",
		secondary:
			"bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/50",
		success:
			"bg-green-600 text-white hover:bg-green-700 shadow-green-600/50",
		warning:
			"bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/50",
		danger: "bg-red-600 text-white hover:bg-red-700 shadow-red-600/50",
	},
	light: {
		default: "text-gray-900 hover:bg-gray-200",
		primary: "text-blue-600 hover:bg-blue-100",
		secondary: "text-indigo-600 hover:bg-indigo-100",
		success: "text-green-600 hover:bg-green-100",
		warning: "text-amber-600 hover:bg-amber-100",
		danger: "text-red-600 hover:bg-red-100",
	},
	border: {
		default:
			"border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-gray-900/50",
		primary:
			"border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-600/50",
		secondary:
			"border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-indigo-600/50",
		success:
			"border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-green-600/50",
		warning:
			"border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white shadow-amber-600/50",
		danger: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-red-600/50",
	},
	flat: {
		default: "bg-gray-600 text-white hover:bg-gray-700 shadow-gray-600/50",
		primary: "bg-blue-400 text-white hover:bg-blue-500 shadow-blue-400/50",
		secondary:
			"bg-indigo-400 text-white hover:bg-indigo-500 shadow-indigo-400/50",
		success:
			"bg-green-400 text-white hover:bg-green-500 shadow-green-400/50",
		warning:
			"bg-amber-400 text-white hover:bg-amber-500 shadow-warning-400/50",
		danger: "bg-red-400 text-white hover:bg-red-500 shadow-red-400/50",
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
	className,
	children,
	...props
}) => {
	const computedStyles = useMemo(() => {
		return clsx(
			baseStyles,
			isIconOnly ? iconSizeStyles[size] : sizeStyles[size],
			variantStyles[variant][color],
			(isRounded || isIconOnly) && "!rounded-full",
			isFullWidth && "w-full",
			isShadow && "shadow-md",
			(isLoading || props.disabled) && "pointer-events-none opacity-70",
			className
		);
	}, [
		size,
		color,
		variant,
		isRounded,
		isFullWidth,
		isShadow,
		isIconOnly,
		isLoading,
		className,
		props.disabled,
	]);

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, opacity: 0.9 }}
			className={computedStyles}
			disabled={props.disabled}
			{...props}
		>
			{isLoading && <Spinner $color="#FFF" $width={20} $height={20} />}
			{!isLoading && (children as ReactNode)}
		</motion.button>
	);
};

export default memo(Button);
