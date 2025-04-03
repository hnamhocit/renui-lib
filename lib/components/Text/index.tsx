import { memo } from "react";
import clsx from "clsx";

import { Color } from "../../types";

type TextSize = "heading" | "subheading" | "paragraph" | "caption" | "headline";
type TextStyle = "bold" | "italic" | "underline";

interface TextProps {
	children: React.ReactNode;
	className?: string;
	color?: Color;
	size?: TextSize;
	style?: TextStyle;
}

const variants = {
	colors: {
		default: "dark:text-white",
		primary: "text-blue-500 dark:text-blue-400",
		secondary: "text-indigo-500 dark:text-indigo-400",
		success: "text-green-500 dark:text-green-400",
		warning: "text-yellow-500 dark:text-yellow-400",
		danger: "text-red-500 dark:text-red-400",
	},
	sizes: {
		heading: "text-3xl font-bold",
		subheading: "text-2xl font-semibold",
		paragraph: "text-base",
		caption: "text-sm",
		headline: "text-5xl font-black",
	},
	styles: {
		bold: "font-bold",
		italic: "italic",
		underline: "underline",
	},
};

const Text = ({
	children,
	className,
	color = "default",
	size = "paragraph",
	style,
}: TextProps) => {
	return (
		<div
			className={clsx(
				"transition",
				variants.colors[color],
				variants.sizes[size],
				style && variants.styles[style],
				className,
			)}
		>
			{children}
		</div>
	);
};

export default memo(Text);
