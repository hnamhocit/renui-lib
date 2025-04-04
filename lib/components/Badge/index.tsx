"use client";

import clsx from "clsx";
import { FC, memo, ReactNode } from "react";

import Styles from "./Badge.module.css";
import { Color, Size } from "../../types";

interface BadgeProps {
	children: ReactNode;
	size?: Size;
	color?: Color;
	isPing?: boolean;
	classNames?: BadgeClassNames;
	content: ReactNode;
	className?: string;
}

interface BadgeClassNames {
	container?: string;
}

const variants = {
	sizes: {
		sm: "text-xs py-0.5 px-1.5",
		md: "text-sm py-1 px-2",
		lg: "text-base py-1.5 px-3",
	},
	colors: {
		default: "bg-gray-900 text-white border-gray-800",
		primary: "bg-blue-600 text-white border-blue-700",
		secondary: "bg-indigo-600 text-white border-indigo-700",
		success: "bg-green-600 text-white border-green-700",
		warning: "bg-amber-600 text-white border-amber-700",
		danger: "bg-red-600 text-white border-red-700",
	},
};

const Badge: FC<BadgeProps> = ({
	children,
	size = "md",
	color = "default",
	isPing,
	content,
	className,
	classNames,
}) => {
	return (
		<div className={clsx("relative inline-block", classNames?.container)}>
			<div
				className={clsx(
					"absolute top-0 right-0 rounded-full border-2 transition-transform translate-x-1/2 -translate-y-1/2 whitespace-nowrap",
					variants.sizes[size],
					variants.colors[color],
					className,
					isPing && Styles.ping,
				)}
			>
				{content}
			</div>

			{children}
		</div>
	);
};

export default memo(Badge);
