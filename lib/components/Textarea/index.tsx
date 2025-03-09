"use client";

import clsx from "clsx";
import { ChangeEvent, FC, memo, useId, useLayoutEffect, useRef } from "react";

interface TextareaProps {
	value: string;
	onChange: (value: string) => void | Promise<void>;
	className?: string;
	placeholder?: string;
	rounded?: boolean;
	isError?: boolean;
	label?: string;
	errorMessage?: string;
	classNames: TextareaClassNames;
}

interface TextareaClassNames {
	container?: string;
	label?: string;
}

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
		<div className={clsx("space-y-2", classNames.container)}>
			<label
				htmlFor={id}
				className={clsx(
					"text-sm text-gray-700 font-medium",
					classNames.label,
					isError && "!text-red-600"
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
					"outline-none resize-none rounded-md shadow-md bg-gray-200 p-2 w-full",
					rounded && "!rounded-2xl",
					isError && "!bg-red-600 text-white",
					className
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
