"use client";

import clsx from "clsx";
import { FC, memo, useState, useCallback } from "react";

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

// Define image status states for clarity
type ImageStatus = "loading" | "loaded" | "error";

const Image: FC<ImageProps> = ({
	src,
	alt = "",
	className,
	isZoom,
	isRounded,
	classNames,
	placeholder,
}) => {
	const [status, setStatus] = useState<ImageStatus>("loading");

	const handleLoad = useCallback(() => {
		setStatus("loaded");
	}, []);

	const handleError = useCallback(() => {
		setStatus("error");
	}, []);

	const isLoading = status === "loading";
	const hasError = status === "error";

	// Determine placeholder styles once
	const placeholderStyle = placeholder
		? { backgroundImage: `url(${placeholder})` }
		: undefined;
	const placeholderClasses = placeholder
		? "bg-cover bg-center blur-sm"
		: "flex items-center justify-center";

	return (
		<div
			className={clsx(
				"relative overflow-hidden rounded-md inline-block",
				classNames?.container,
				isRounded && "!rounded-full",
			)}
		>
			{hasError && (
				<div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-500 text-xs p-1">
					Error
				</div>
			)}

			{isLoading && !hasError && (
				<div
					className={clsx(
						"absolute inset-0 bg-gray-200 animate-pulse",
						placeholderClasses,
					)}
					style={placeholderStyle}
					role="status"
					aria-label="Loading image"
				>
					{!placeholder && (
						<span className="text-gray-400 text-xs">
							Loading...
						</span>
					)}
				</div>
			)}

			{src ? (
				<img
					src={src}
					alt={alt}
					className={clsx(
						"block w-full h-full rounded-md object-cover duration-300 transition-all",
						isRounded && "!rounded-full",
						className,
						isZoom && "hover:scale-110 cursor-pointer",
						isLoading || hasError ? "opacity-0" : "opacity-100",
					)}
					onLoad={handleLoad}
					onError={handleError}
					loading="lazy"
				/>
			) : (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-xs p-1">
					No image
				</div>
			)}
		</div>
	);
};

export default memo(Image);
