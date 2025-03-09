"use client";

import clsx from "clsx";
import { FC, memo, useState } from "react";

interface ImageProps {
	src: string | undefined;
	alt: string | undefined;
	className?: string;
	isZoom?: boolean;
	isRounded?: boolean;
	classNames?: ImageClassNames;
	placeholder?: string; // Optional base64 placeholder
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
	placeholder,
}) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div
			className={clsx(
				"relative overflow-hidden w-fit rounded-md",
				classNames?.container,
				isRounded && "!rounded-full"
			)}
		>
			{/* Optimized placeholder */}
			{isLoading && (
				<div
					className="absolute inset-0 bg-gray-200 bg-cover bg-center blur-sm"
					style={{
						backgroundImage: placeholder
							? `url(${placeholder})`
							: undefined,
					}}
				/>
			)}

			<img
				src={src}
				alt={alt}
				className={clsx(
					"w-full h-full rounded-md object-cover duration-300 transition-all",
					isRounded && "!rounded-full",
					className,
					isZoom && "hover:scale-130 cursor-pointer",
					isLoading && "opacity-0"
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				style={{
					visibility: isLoading ? "hidden" : "visible",
				}}
			/>
		</div>
	);
};

export default memo(Image);
