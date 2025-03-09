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
			className={clsx("p-4 font-semibold text-xl border-b-2", className)}
		>
			{children}
		</div>
	);
};

export default ModalHeader;
