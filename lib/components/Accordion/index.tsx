"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { FC, memo, ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface AccordionClassNames {
	container?: string;
	trigger?: string;
}

interface AccordionProps {
	label: string;
	children: ReactNode;
	classNames?: AccordionClassNames;
	className?: string;
}

const Accordion: FC<AccordionProps> = ({
	label,
	children,
	classNames,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<div className={classNames?.container}>
			<motion.button
				onClick={toggleIsOpen}
				whileTap={{ scale: 0.95 }}
				className={clsx(
					"flex items-center gap-3 p-2 transition font-semibold w-full rounded-t-md",
					classNames?.trigger
				)}
			>
				{label}

				{isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
			</motion.button>

			<div
				className={clsx(
					"transition-all scrollbar-hide duration-300 overflow-y-scroll",
					className,
					{
						"max-h-0": !isOpen,
						"max-h-80": isOpen,
					}
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default memo(Accordion);
