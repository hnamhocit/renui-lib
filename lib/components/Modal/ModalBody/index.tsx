"use client";

import clsx from "clsx";
import React, { FC } from "react";

interface ModalBodyProps {
	children: React.ReactNode;
	className?: string;
}

const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
	return <div className={clsx("p-4 space-y-2", className)}>{children}</div>;
};

export default ModalBody;
