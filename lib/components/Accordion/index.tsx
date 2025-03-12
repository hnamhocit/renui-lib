"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { FC, memo, ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

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
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
		}
	}, [isOpen]);

	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<div className={classNames?.container}>
			<motion.button
				onClick={toggleIsOpen}
				whileTap={{ scale: 0.95, opacity: 0.7 }}
				className={clsx(
					"flex items-center gap-3 p-2 font-semibold w-full",
					classNames?.trigger
				)}
			>
				{label}

				<FaAngleDown
					size={20}
					className={clsx("transition-all", isOpen && "rotate-180")}
				/>
			</motion.button>

			<motion.div
				initial={false}
				ref={contentRef}
				transition={{ duration: 0.3 }}
				animate={{
					height: contentHeight,
					opacity: isOpen ? 1 : 0,
				}}
				className={clsx("overflow-hidden", className)}
			>
				<div className="p-2">{children}</div>
			</motion.div>
		</div>
	);
};

export default memo(Accordion);
