"use client";

import clsx from "clsx";
import { FC, memo } from "react";

import { Color, Size } from "../../types";
import Image from "../Image";

interface AvatarProps {
	src: string | undefined;
	alt: string | undefined;
	size?: Size;
	isRounded?: boolean;
	isBordered?: boolean;
	isZoom?: boolean;
	color?: Color;
	className?: string;
}

const variants = {
	sizes: {
		sm: "!w-8 !h-8",
		md: "!w-12 !h-12",
		lg: "!w-16 !h-16",
	},
	colors: {
		default: "border-gray-200",
		primary: "border-blue-600",
		secondary: "border-indigo-600",
		success: "border-green-600",
		warning: "border-amber-600",
		danger: "border-red-600",
	},
};

const Avatar: FC<AvatarProps> = ({
	src,
	size = "md",
	color = "default",
	alt,
	isZoom,
	isBordered,
	isRounded,
	className,
}) => {
	return (
		<Image
			isRounded={isRounded}
			src={src}
			alt={alt}
			className={clsx(
				variants.sizes[size],
				isBordered && "border-2",
				variants.colors[color],
				className
			)}
			isZoom={isZoom}
		/>
	);
};

export default memo(Avatar);
