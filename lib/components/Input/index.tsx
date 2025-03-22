"use client";

import clsx from "clsx";
import {
	FC,
	InputHTMLAttributes,
	memo,
	ReactNode,
	useId,
	useState,
} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Color, Size } from "../../types";
import Button from "../Button";

export type InputVariant = "solid" | "bordered" | "light" | "underlined";

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant?: InputVariant;
	size?: Size;
	color?: Color;
	label?: string;
	isError?: boolean;
	errorMessage?: string;
	isRounded?: boolean;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	classNames?: InputClassNames;
	isTranslateY?: boolean;
}

interface InputClassNames {
	input?: string;
	label?: string;
	container?: string;
}

const variants = {
	variants: {
		solid: "",
		bordered: "!bg-transparent border-2",
		underlined: "!bg-transparent border-b-2 !rounded-none",
		light: "!bg-transparent",
	},
	sizes: {
		lg: "text-lg py-3 px-6",
		md: "py-2 px-4",
		sm: "text-sm py-1 px-2",
	},
	colors: {
		default: "bg-gray-200 border-gray-200 ring-gray-200/50",
		primary: "bg-blue-600 border-blue-600 ring-blue-600/50",
		secondary: "bg-indigo-600 border-indigo-600 ring-indigo-600/50",
		success: "bg-green-600 border-green-600 ring-green-600/50",
		warning: "bg-amber-600 border-amber-600 ring-amber-600/50",
		danger: "bg-red-600 border-red-600 ring-red-600/50",
	},
};

const Input: FC<InputProps> = ({
	variant = "solid",
	size = "md",
	color = "default",
	label,
	isError,
	isRounded,
	errorMessage,
	startIcon,
	endIcon,
	classNames,
	isTranslateY,
	...props
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const id = useId();

	const toggleIsVisible = () => setIsVisible((prev) => !prev);
	const toggleIsFocus = () => setIsFocus((prev) => !prev);

	return (
		<div className={classNames?.container}>
			<label
				htmlFor={id}
				className={clsx(
					"text-sm text-gray-700 dark:text-white font-medium",
					classNames?.label,
					isError && "!text-red-600",
				)}
			>
				{label}
			</label>

			<div
				className={clsx(
					"flex items-center gap-3 my-2 rounded-md transition-all",
					props.className,
					variants.variants[variant],
					variants.sizes[size],
					variants.colors[color],
					isRounded && "!rounded-full",
					isError && "!bg-red-600 !text-white",
					isFocus && "ring-2",
					isTranslateY && isFocus && "-translate-y-2",
				)}
			>
				{startIcon}

				<input
					{...props}
					type={isVisible ? "text" : props.type}
					className={clsx(
						"flex-1 block outline-none w-full bg-transparent",
						classNames?.input,
					)}
					onFocus={toggleIsFocus}
					onBlur={toggleIsFocus}
				/>

				{props.type === "password" && (
					<Button
						variant="light"
						onClick={toggleIsVisible}
						isIconOnly
						isRounded
					>
						{isVisible ? <FaEyeSlash /> : <FaEye />}
					</Button>
				)}

				{endIcon}
			</div>

			<div className="text-xs font-medium text-red-600">
				{errorMessage}
			</div>
		</div>
	);
};

export default memo(Input);
