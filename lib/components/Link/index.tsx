import clsx from "clsx";
import { HTMLMotionProps, motion } from "motion/react";
import { FC, memo } from "react";

import { Color } from "../../types";

interface LinkProps extends Omit<HTMLMotionProps<"a">, "ref"> {
	isUnderline?: boolean;
	color?: Color;
}

const variants = {
	colors: {
		default:
			"dark:text-white text-gray-900 decoration-gray-900 hover:text-gray-950 hover:decoration-gray-950",
		primary:
			"text-blue-600 decoration-blue-600 hover:text-blue-700 hover:decoration-blue-700",
		secondary:
			"text-indigo-600 decoration-indigo-600 hover:text-indigo-700 hover:decoration-indigo-700",
		danger: "text-red-600 decoration-red-600 hover:text-red-700 hover:decoration-red-700",
		warning:
			"text-amber-600 decoration-amber-600 hover:text-amber-700 hover:decoration-amber-700",
		success:
			"text-green-600 decoration-green-600 hover:text-green-700 hover:decoration-green-700",
	},
};

const Link: FC<LinkProps> = ({
	color = "default",
	isUnderline,
	children,
	...props
}) => {
	return (
		<motion.a
			{...props}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, opacity: 0.7 }}
			className={clsx(
				"hover:underline inline-block transition-colors",
				props.className,
				isUnderline && "underline underline-offset-2",
				variants.colors[color],
			)}
		>
			{children}
		</motion.a>
	);
};

export default memo(Link);
