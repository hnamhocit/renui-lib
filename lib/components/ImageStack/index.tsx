"use client";

import clsx from "clsx";
import { FC, memo } from "react";

import { Avatar } from "../../main";

interface ImageStackProps {
	images?: string[];
	maxImages?: number;
	className?: string;
	classNames?: ImageStackClassNames;
}

interface ImageStackClassNames {
	container?: string;
	text?: string;
}

const ImageStack: FC<ImageStackProps> = ({
	images = [],
	maxImages = 5,
	className,
	classNames,
}) => {
	const visibleCount = Math.min(images.length, maxImages);
	const hasMore = images.length > maxImages;

	// Calculate container width based on visible avatars
	const containerWidth = visibleCount * 24 + 40; // 40px base + 24px per additional avatar

	return (
		<div className={clsx("relative flex items-center", className)}>
			{/* Avatar stack container */}
			<div
				className={clsx(
					"relative flex items-center",
					classNames?.container
				)}
				style={{ width: containerWidth }}
			>
				{images.slice(0, maxImages).map((src, index) => (
					<div
						key={index}
						className="absolute transition-transform"
						style={{
							transform: `translateX(${index * 24}px)`,
							zIndex: maxImages - index,
						}}
					>
						<Avatar
							src={src}
							alt={`avatar-${index}`}
							isRounded
							isBordered
							isZoom
							className={clsx(
								"w-10 h-10 border-2 border-white",
								index > 0 && "ring-2 ring-white"
							)}
						/>
					</div>
				))}
			</div>

			{/* More count indicator */}
			{hasMore && (
				<div
					className={clsx(
						"ml-2 text-sm text-gray-500",
						classNames?.text
					)}
				>
					+{images.length - maxImages}
				</div>
			)}
		</div>
	);
};

export default memo(ImageStack);
