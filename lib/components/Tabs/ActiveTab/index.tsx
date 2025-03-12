import clsx from "clsx";
import { FC, memo, useEffect, useRef } from "react";

interface ActiveTabProps {
	title: string;
	activeIndex: number;
	index: number;
	className?: string;
	setActiveIndex: (index: number) => void;
	setX: (x: number) => void;
	setWidth: (width: number) => void;
	isFullWidth?: boolean;
}

const ActiveTab: FC<ActiveTabProps> = ({
	title,
	className,
	activeIndex,
	setActiveIndex,
	index,
	setX,
	setWidth,
	isFullWidth,
}) => {
	const isActive = activeIndex === index;
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (isActive && ref.current) {
			const current = ref.current;
			const newX = current.offsetLeft;
			const newWidth = current.offsetWidth;

			setX(newX);
			setWidth(newWidth);
		}
	}, [isActive, setX, setWidth]);

	return (
		<button
			ref={ref}
			className={clsx(
				"block relative py-1 px-3 text-gray-700 transition-all border-r border-gray-200 hover:scale-105",
				isFullWidth && "flex-1",
				className,
				{
					"font-semibold": isActive,
				}
			)}
			onClick={() => setActiveIndex(index)}
		>
			{title}
		</button>
	);
};

export default memo(ActiveTab);
