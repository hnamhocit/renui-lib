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
		default: "bg-gray-900 text-white hover:bg-gray-950",
		primary: "bg-blue-600 text-white hover:bg-blue-700",
		secondary: "bg-indigo-600 text-white hover:bg-indigo-700",
		success: "bg-green-600 text-white hover:bg-green-700",
		warning: "bg-amber-600 text-white hover:bg-amber-700",
		danger: "bg-red-600 text-white hover:bg-red-700",
	},
	light: {
		default: "text-gray-900 hover:bg-gray-200",
		primary: "bg-blue-50 text-blue-600 hover:bg-blue-100",
		secondary: "text-indigo-600 hover:bg-indigo-100",
		success: "text-green-600 hover:bg-green-100",
		warning: "text-amber-600 hover:bg-amber-100",
		danger: "text-red-600 hover:bg-red-100",
	},
	border: {
		default:
			"border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
		primary:
			"border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
		secondary:
			"border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
		success:
			"border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
		warning:
			"border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
		danger: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
	},
	flat: {
		default: "bg-gray-600 text-white hover:bg-gray-700",
		primary: "bg-blue-400 text-white hover:bg-blue-500",
		secondary: "bg-indigo-400 text-white hover:bg-indigo-500",
		success: "bg-green-400 text-white hover:bg-green-500",
		warning: "bg-amber-400 text-white hover:bg-amber-500",
		danger: "bg-red-400 text-white hover:bg-red-500",
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
			{isLoading && <Spinner $color="#FFF" />}
			{!isLoading && (children as ReactNode)}
		</motion.button>
	);
};

export default memo(Button);
