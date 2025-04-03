import clsx from "clsx";
import { memo } from "react";

interface FlexProps {
	children: React.ReactNode;
	className?: string;
	direction?: "row" | "column";
	alignItems?: "start" | "center" | "end";
	justifyContent?: "start" | "center" | "end";
}

const variants = {
	direction: {
		row: "flex-row",

		column: "flex-col",
	},
	alignItems: {
		start: "items-start",
		center: "items-center",
		end: "items-end",
	},
	justifyContent: {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
	},
};

const Flex = memo(
	({
		children,
		className,
		direction = "row",
		alignItems = "start",
		justifyContent = "start",
	}: FlexProps) => {
		return (
			<div
				className={clsx(
					"flex gap-3",
					variants.direction[direction],
					variants.alignItems[alignItems],
					variants.justifyContent[justifyContent],
					className,
				)}
			>
				{children}
			</div>
		);
	},
);

export default Flex;
