"use client";

import clsx from "clsx";
import { FC, memo, useRef, useState } from "react";

interface ImageProps {
	src: string | undefined;
	alt: string | undefined;
	className?: string;
	isZoom?: boolean;
	isRounded?: boolean;
	classNames?: ImageClassNames;
}

interface ImageClassNames {
	container?: string;
}

const Image: FC<ImageProps> = ({
	src,
	alt,
	className,
	isZoom,
	isRounded,
	classNames,
}) => {
	const [isHover, setIsHover] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const imgRef = useRef<HTMLImageElement | null>(null);

	const handleImageLoad = () => setIsLoading(false);
	const toggleIsHover = () => setIsHover((prev) => !prev);

	return (
		<div
			className={clsx(
				"relative overflow-hidden w-fit rounded-md",
				classNames?.container,
				isRounded && "!rounded-full"
			)}
		>
			{isLoading && (
				<div className="animate-pulse w-40 h-24 bg-gray-300"></div>
			)}

			<img
				ref={imgRef}
				src={src}
				alt={alt}
				className={clsx(
					"w-full h-full rounded-md object-cover duration-300 transition-all",
					isRounded && "!rounded-full",
					className,
					isHover && isZoom && "scale-130 cursor-pointer"
				)}
				onMouseEnter={toggleIsHover}
				onMouseLeave={toggleIsHover}
				onLoad={handleImageLoad}
			/>
		</div>
	);
};

export default memo(Image);
