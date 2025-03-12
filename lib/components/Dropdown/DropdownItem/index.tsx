"use client";

import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'motion/react'
import { FC, memo } from 'react'

import { Color } from '../../../types'

interface DropdownItemProps extends Omit<HTMLMotionProps<"button">, "ref"> {
	color?: Color;
}

const variants = {
	colors: {
		default: "hover:bg-gray-200",
		primary: "hover:bg-blue-600 hover:text-white",
		secondary: "hover:bg-indigo-600 hover:text-white",
		danger: "hover:bg-red-600 hover:text-white",
		warning: "hover:bg-amber-600 hover:text-white",
		success: "hover:bg-green-600 hover:text-white",
	},
};

const DropdownItem: FC<DropdownItemProps> = ({
	children,
	color = "default",
	...props
}) => {
	return (
		<motion.button
			{...props}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, opacity: 0.7 }}
			className={clsx(
				"flex w-full items-center gap-3 p-2 rounded-md transition-colors",
				variants.colors[color],
				props.className
			)}
		>
			{children}
		</motion.button>
	);
};

export default memo(DropdownItem);
