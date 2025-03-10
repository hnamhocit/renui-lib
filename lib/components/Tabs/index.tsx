import clsx from "clsx";
import { FC, memo, ReactNode, useState } from "react";

import { Color } from "../../types";
import ActiveTab from "./ActiveTab";

interface IData {
	title: string;
	children: ReactNode;
}

interface ActiveTabsClassNames {
	container?: string;
	tab?: string;
}

interface TabsProps {
	data: IData[];
	color?: Color;
	classNames?: ActiveTabsClassNames;
}

const variants = {
	colors: {
		default: "bg-gray-200",
		primary: "bg-blue-200",
		secondary: "bg-indigo-200",
		success: "bg-green-200",
		warning: "bg-amber-200",
		danger: "bg-red-200",
	},
};

const Tabs: FC<TabsProps> = ({ data, color = "default", classNames }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [x, setX] = useState(0);
	const [width, setWidth] = useState(0);

	return (
		<div className={classNames?.container}>
			<div className="flex relative items-center overflow-x-scroll scrollbar-hide">
				{data.map((item, index) => (
					<ActiveTab
						title={item.title}
						activeIndex={activeIndex}
						index={index}
						setActiveIndex={setActiveIndex}
						className={classNames?.tab}
						setX={setX}
						setWidth={setWidth}
					/>
				))}

				<div
					className={clsx(
						"absolute top-0 h-full transition-all -z-10",
						variants.colors[color],
						{
							"rounded-l-md": activeIndex === 0,
							"rounded-r-md": activeIndex === data.length - 1,
						}
					)}
					style={{ width: `${width}px`, left: `${x}px` }}
				></div>
			</div>

			<div className="p-2">{data[activeIndex].children}</div>
		</div>
	);
};

export default memo(Tabs);
