import clsx from "clsx";
import { FC, memo, ReactNode, useEffect, useRef } from "react";

interface ActiveTabProps {
	item: { title: string; icon?: ReactNode };
	activeIndex: number;
	index: number;
	className?: string;
	setActiveIndex: (index: number) => void;
	setX: (x: number) => void;
	setWidth: (width: number) => void;
	isFullWidth?: boolean;
	length: number;
}

const ActiveTab: FC<ActiveTabProps> = ({
	item: { title, icon },
	className,
	activeIndex,
	setActiveIndex,
	index,
	setX,
	setWidth,
	isFullWidth,
	length,
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
				"flex items-center gap-3 dark:text-white relative py-1 px-3 text-gray-700 transition-all border border-gray-200 hover:scale-105",
				index === 0 && "rounded-l-md",
				index === length - 1 && "rounded-r-md",
				isFullWidth && "flex-1",
				className,
				{
					"font-semibold": isActive,
				},
			)}
			onClick={() => setActiveIndex(index)}
		>
			{icon}
			{title}
		</button>
	);
};

export default memo(ActiveTab);
