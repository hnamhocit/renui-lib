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
}

const ActiveTab: FC<ActiveTabProps> = ({
	title,
	className,
	activeIndex,
	setActiveIndex,
	index,
	setX,
	setWidth,
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
				"block flex-1 relative py-2 px-4 text-gray-700 rounded-b-md transition-all hover:scale-105",
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
