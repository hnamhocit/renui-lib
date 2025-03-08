"use client";

import { FC, memo } from "react";

import { Avatar } from "../../main";

interface ImageStackProps {
	images: string[] | undefined;
	maxImages?: number;
}

const ImageStack: FC<ImageStackProps> = ({ images, maxImages = 5 }) => {
	const displayedImages = images?.slice(0, maxImages) || [];

	return (
		<div className="space-y-2">
			<div className="relative min-h-12">
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
							isZoom
						/>
					</div>
				))}
			</div>

			<div className="text-sm text-gray-500 shrink-0">
				+{(images?.length ?? 0) - maxImages} more ...
			</div>
		</div>
	);
};

export default memo(ImageStack);
