"use client";

import clsx from "clsx";
import { FC, memo } from "react";

import { Avatar } from "../../main";

interface ImageStackProps {
	images: string[] | undefined;
	maxImages?: number;
	className?: string;
	classNames?: ImageStackClassNames;
}

interface ImageStackClassNames {
	container?: string;
	text?: string;
}

const ImageStack: FC<ImageStackProps> = ({
	images,
	maxImages = 5,
	className,
	classNames,
}) => {
	const displayedImages = images?.slice(0, maxImages) || [];

	return (
		<div className="space-y-2">
			<div className={clsx("relative min-h-12", classNames?.container)}>
				{displayedImages.map((image, index) => (
					<div
						key={index}
						className="absolute top-0"
						style={{
							zIndex: displayedImages.length - index,
							left: index * 24, // Offset each image by 8px
						}}
					>
						<Avatar
							src={image}
							alt={`avatar-${index}`}
							isRounded
							isBordered
							className={className}
							isZoom
						/>
					</div>
				))}
			</div>

			<div
				className={clsx(
					"text-sm text-gray-500 shrink-0",
					classNames?.text
				)}
			>
				+{(images?.length ?? 0) - maxImages} more ...
			</div>
		</div>
	);
};

export default memo(ImageStack);
