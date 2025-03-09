import clsx from "clsx";
import { AnchorHTMLAttributes, FC, memo } from "react";

import { Color } from "../../types";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isUnderline?: boolean;
	color?: Color;
}

const variants = {
	colors: {
		default: "text-gray-900 decoration-gray-900",
		primary: "text-blue-600 decoration-blue-600",
		secondary: "text-indigo-600 decoration-indigo-600",
		danger: "text-red-600 decoration-red-600",
		warning: "text-warning decoration-warning",
		success: "text-green-600 decoration-green-600",
	},
};

const Link: FC<LinkProps> = ({
	color = "default",
	isUnderline,
	children,
	...props
}) => {
	return (
		<a
			{...props}
			className={clsx(
				"transition-all hover:underline hover:opacity-90",
				props.className,
				isUnderline && "underline underline-offset-2",
				variants.colors[color]
			)}
		>
			{children}
		</a>
	);
};

export default memo(Link);
