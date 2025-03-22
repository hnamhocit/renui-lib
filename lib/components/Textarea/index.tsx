"use client";

import clsx from "clsx";
import { ChangeEvent, FC, memo, useId, useLayoutEffect, useRef } from "react";

import { Color } from "../../types";

interface TextareaProps {
	value: string;
	onChange: (value: string) => void | Promise<void>;
	className?: string;
	placeholder?: string;
	rounded?: boolean;
	isError?: boolean;
	label?: string;
	errorMessage?: string;
	classNames?: TextareaClassNames;
	color?: Color;
	isTranslateY?: boolean;
}

interface TextareaClassNames {
	container?: string;
	label?: string;
}

const variants = {
	colors: {
		default: "bg-gray-200 border-gray-200 ring-gray-200/50",
		primary: "bg-blue-600 border-blue-600 ring-blue-600/50",
		secondary: "bg-indigo-600 border-indigo-600 ring-indigo-600/50",
		success: "bg-green-600 border-green-600 ring-green-600/50",
		warning: "bg-amber-600 border-amber-600 ring-amber-600/50",
		danger: "bg-red-600 border-red-600 ring-red-600/50",
	},
};

const Textarea: FC<TextareaProps> = ({
	value,
	onChange,
	className,
	placeholder,
	rounded,
	isError,
	label,
	errorMessage,
	classNames,
	color = "default",
	isTranslateY,
}) => {
	const textbox = useRef<HTMLTextAreaElement>(null);

	function adjustHeight() {
		if (textbox.current) {
			textbox.current.style.height = "inherit";
			textbox.current.style.height = `${textbox.current.scrollHeight}px`;
		}
	}

	useLayoutEffect(adjustHeight, []);

	function handleKeyDown(e: ChangeEvent<HTMLTextAreaElement>) {
		adjustHeight();
		onChange(e.target.value);
	}

	const id = useId();

	return (
		<div className={clsx("space-y-2", classNames?.container)}>
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

			<textarea
				spellCheck={false}
				autoCorrect="off"
				id={id}
				ref={textbox}
				value={value}
				onChange={handleKeyDown}
				className={clsx(
					"outline-none resize-none rounded-md bg-gray-100 p-2 w-full focus:ring-2 transition-all",
					variants.colors[color],
					rounded && "!rounded-2xl",
					isError && "!bg-red-600 text-white",
					isTranslateY && "focus:-translate-y-2",
					className,
				)}
				placeholder={placeholder}
			/>

			<span className="text-xs font-semibold text-red-600">
				{errorMessage}
			</span>
		</div>
	);
};

export default memo(Textarea);
