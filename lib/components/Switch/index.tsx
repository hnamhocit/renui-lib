import clsx from "clsx";
import { motion } from "motion/react";
import { FC, memo, ReactNode } from "react";

import { Color, Size } from "../../types";

interface SwitchProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	icon?: ReactNode;
	className?: string;
	classNames?: SwitchClassNames;
	color?: Color;
	size?: Size;
}

interface SwitchClassNames {
	container?: string;
}

const variants = {
	colors: {
		default: "!bg-gray-900",
		primary: "!bg-blue-600",
		secondary: "b!g-indigo-600",
		success: "!bg-green-600",
		warning: "!bg-amber-600",
		danger: "!bg-red-600",
	},
	sizes: {
		sm: "min-w-12 min-h-6",
		md: "min-w-16 min-h-8",
		lg: "min-w-20 min-h-10",
	},
};

const Switch: FC<SwitchProps> = ({
	checked,
	onChange,
	icon,
	className,
	classNames,
	color = "default",
	size = "md",
}) => {
	const toggleIsActive = () => {
		if (onChange) onChange(!checked);
	};

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={clsx(
				"min-w-16 inline-block p-1 rounded-full bg-gray-300 relative min-h-8 border-2 cursor-pointer border-gray-300",
				variants.sizes[size],
				classNames?.container
			)}
			onClick={toggleIsActive}
		>
			<div
				className={clsx(
					"absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-all flex items-center justify-center",
					className,
					checked && variants.colors[color],
					{
						"translate-x-full text-white": checked,
						"translate-x-0": !checked,
					}
				)}
			>
				{icon}
			</div>
		</motion.div>
	);
};

export default memo(Switch);
