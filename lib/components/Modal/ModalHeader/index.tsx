"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ModalHeaderProps {
	children: ReactNode;
	className?: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children, className }) => {
	return (
		<div
			className={clsx(
				"sticky top-0 inset-x-0 z-10 bg-white p-4 font-semibold text-2xl shadow-md",
				className
			)}
		>
			{children}
		</div>
	);
};

export default ModalHeader;
