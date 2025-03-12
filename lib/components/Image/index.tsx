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
	const [hasError, setHasError] = useState(false);

	const handleLoad = () => {
		setIsLoading(false);
		setHasError(false);
	};

	const handleError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	return (
		<div
			className={clsx(
				"relative overflow-hidden rounded-md w-full h-full",
				classNames?.container,
				isRounded && "!rounded-full"
			)}
		>
			{/* Error state */}
			{hasError && (
				<div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-500">
					Error loading image
				</div>
			)}

			{/* Loading placeholder */}
			{isLoading && !hasError && (
				<div
					className={clsx(
						"absolute inset-0 bg-gray-200 animate-pulse",
						placeholder
							? "bg-cover bg-center blur-sm"
							: "flex items-center justify-center"
					)}
					style={{
						backgroundImage: placeholder
							? `url(${placeholder})`
							: undefined,
					}}
				>
					{!placeholder && (
						<span className="text-gray-400">Loading...</span>
					)}
				</div>
			)}

			{/* Actual image */}
			<img
				src={src}
				alt={alt}
				className={clsx(
					"w-full h-full rounded-md object-cover duration-300 transition-all",
					isRounded && "!rounded-full",
					className,
					isZoom && "hover:scale-130 cursor-pointer",
					(isLoading || hasError) && "opacity-0"
				)}
				onLoad={handleLoad}
				onError={handleError}
				loading="lazy"
				style={{
					visibility: isLoading || hasError ? "hidden" : "visible",
				}}
			/>
		</div>
	);
};

export default memo(Image);
