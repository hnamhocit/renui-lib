"use client";

import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC, memo, ReactNode, useMemo } from "react";

import { Color, Size } from "../../types";
import Spinner from "../Spinner";
import Ripple from "../Ripple";

type ButtonVariant = "solid" | "light" | "border" | "flat";

// Define props interface extending motion props, omitting 'ref'
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

// --- Style Definitions (Constants) ---
// Moved outside the component for better performance (defined only once)

const baseStyles =
	"relative overflow-hidden flex items-center justify-center rounded-md gap-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"; // Added focus styles for accessibility

const sizeStyles: Readonly<Record<Size, string>> = {
	lg: "text-lg py-3 px-6",
	md: "py-2 px-4",
	sm: "text-sm py-1 px-2",
};

const iconSizeStyles: Readonly<Record<Size, string>> = {
	lg: "p-3",
	md: "p-2",
	sm: "p-1",
};

// Using Readonly for potentially better immutability hints
const variantStyles: Readonly<
	Record<ButtonVariant, Readonly<Record<Color, string>>>
> = {
	solid: {
		default:
			"bg-gray-900 text-white hover:bg-gray-950 shadow-gray-900/50 focus-visible:ring-gray-950",
		primary:
			"bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/50 focus-visible:ring-blue-700",
		secondary:
			"bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/50 focus-visible:ring-indigo-700",
		success:
			"bg-green-600 text-white hover:bg-green-700 shadow-green-600/50 focus-visible:ring-green-700",
		warning:
			"bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/50 focus-visible:ring-amber-700",
		danger: "bg-red-600 text-white hover:bg-red-700 shadow-red-600/50 focus-visible:ring-red-700",
	},
	light: {
		default:
			"text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 focus-visible:ring-gray-500", // Added dark hover and focus
		primary: "text-blue-600 hover:bg-blue-100 focus-visible:ring-blue-500",
		secondary:
			"text-indigo-600 hover:bg-indigo-100 focus-visible:ring-indigo-500",
		success:
			"text-green-600 hover:bg-green-100 focus-visible:ring-green-500",
		warning:
			"text-amber-600 hover:bg-amber-100 focus-visible:ring-amber-500",
		danger: "text-red-600 hover:bg-red-100 focus-visible:ring-red-500",
	},
	border: {
		default:
			"dark:text-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-gray-900/50 focus-visible:ring-gray-900",
		primary:
			"border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-600/50 focus-visible:ring-blue-600",
		secondary:
			"border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-indigo-600/50 focus-visible:ring-indigo-600",
		success:
			"border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-green-600/50 focus-visible:ring-green-600",
		warning:
			"border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white shadow-amber-600/50 focus-visible:ring-amber-600",
		danger: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-red-600/50 focus-visible:ring-red-600",
	},
	flat: {
		default:
			"bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus-visible:ring-gray-500", // Changed default flat for better contrast/appearance, added dark mode
		primary:
			"bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-blue-400/50 focus-visible:ring-blue-500", // Adjusted flat colors for common usage
		secondary:
			"bg-indigo-100 text-indigo-700 hover:bg-indigo-200 shadow-indigo-400/50 focus-visible:ring-indigo-500",
		success:
			"bg-green-100 text-green-700 hover:bg-green-200 shadow-green-400/50 focus-visible:ring-green-500",
		warning:
			"bg-amber-100 text-amber-700 hover:bg-amber-200 shadow-warning-400/50 focus-visible:ring-amber-500",
		danger: "bg-red-100 text-red-700 hover:bg-red-200 shadow-red-400/50 focus-visible:ring-red-500",
	},
};

// Spinner dimensions based on button size
const spinnerSizes: Readonly<Record<Size, number>> = {
	sm: 16,
	md: 20,
	lg: 24,
};

// Button Component
const ButtonComponent: FC<ButtonProps> = ({
	size = "md",
	color = "default",
	variant = "solid",
	isRounded,
	isFullWidth,
	isShadow, // Consider if shadow should be variant-specific
	isIconOnly,
	isLoading,
	className,
	children,
	disabled: nativeDisabled, // Rename to avoid conflict with isLoading logic
	...props
}) => {
	// Combine loading and native disabled state
	const isDisabled = isLoading || nativeDisabled;

	// Memoize computed styles to avoid recalculation on every render
	const computedStyles = useMemo(() => {
		return clsx(
			baseStyles, // Base styles first
			isIconOnly ? iconSizeStyles[size] : sizeStyles[size], // Size styles
			variantStyles[variant][color], // Variant and color styles
			(isRounded || isIconOnly) && "!rounded-full", // Rounded override
			isFullWidth && "w-full", // Full width
			isShadow &&
				variant !== "light" &&
				variant !== "flat" &&
				"shadow-md", // Apply shadow only to relevant variants
			isDisabled && "pointer-events-none opacity-70", // Disabled state styles
			className, // Allow overriding with custom classes
		);
	}, [
		size,
		color,
		variant,
		isRounded,
		isFullWidth,
		isShadow,
		isIconOnly,
		isDisabled, // Use combined disabled state
		className,
	]);

	const spinnerSize = useMemo(() => spinnerSizes[size], [size]);
	// Determine spinner color based on variant for better contrast
	const spinnerColor = useMemo(() => {
		// For light/flat/border variants, use the text color (approximated) or a default gray
		if (variant === "light" || variant === "flat" || variant === "border") {
			switch (color) {
				case "primary":
					return "#2563EB"; // blue-600
				case "secondary":
					return "#4F46E5"; // indigo-600
				case "success":
					return "#16A34A"; // green-600
				case "warning":
					return "#D97706"; // amber-600
				case "danger":
					return "#DC2626"; // red-600
				default:
					return "#4B5563"; // gray-600
			}
		}
		// For solid variant, use white
		return "#FFF";
	}, [variant, color]);

	return (
		<motion.button
			whileTap={isDisabled ? {} : { scale: 0.95, opacity: 0.9 }} // Disable tap animation when disabled
			className={computedStyles}
			disabled={nativeDisabled} // Use the original disabled prop here
			aria-disabled={isDisabled} // Improve accessibility for screen readers
			aria-live={isLoading ? "polite" : "off"} // Announce loading state change
			{...props} // Spread remaining props
		>
			{isLoading && (
				<Spinner
					$color={spinnerColor}
					$width={spinnerSize}
					$height={spinnerSize}
					aria-label="Loading" // Accessibility for spinner
				/>
			)}
			{/* Render children only when not loading */}
			{/* Using a span helps contain the content visually during loading transition */}
			<span
				className={clsx(
					isLoading && "invisible",
					"flex items-center gap-3",
				)}
			>
				{children as ReactNode}
			</span>
			{/* Render Ripple effect */}
			{!isDisabled && <Ripple />}
			{/* Removed unused divs */}
		</motion.button>
	);
};

// Memoize the component for performance optimization
export default memo(ButtonComponent);
