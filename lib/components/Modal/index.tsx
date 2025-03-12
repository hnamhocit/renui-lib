"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { FC, memo } from "react";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onOpenChange: () => void;
	className?: string;
	classNames?: ModalClassNames;
}

interface ModalClassNames {
	container?: string;
}

const Modal: FC<ModalProps> = ({
	isOpen,
	children,
	onOpenChange,
	className,
	classNames,
}) => {
	return (
		<div
			onClick={onOpenChange}
			className={clsx(
				"fixed inset-0 z-[9999] shadow-2xl transition-all duration-500",
				classNames?.container,
				isOpen ? "visible" : "invisible"
			)}
		>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 -z-10 bg-[rgba(0,0,0,.7)]"
						></motion.div>

						<motion.div
							initial={{ opacity: 0, translateY: 32 }}
							animate={{ opacity: 1, translateY: 0 }}
							exit={{ translateY: 32, opacity: 0 }}
							className={clsx(
								"absolute inset-x-0 bottom-0 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-t-xl sm:rounded-2xl min-w-80 min-h-120 max-h-160 overflow-y-scroll scrollbar-hide",
								className
							)}
							onClick={(e) => e.stopPropagation()}
						>
							{children}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(Modal);
