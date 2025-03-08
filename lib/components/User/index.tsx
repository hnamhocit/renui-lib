"use client";

import { FC, memo } from "react";

import Avatar from "../Avatar";

interface UserProps {
	photoURL: string | undefined;
	name: string | undefined;
	description: string | undefined;
	isLinkDescription?: boolean;
}

const User: FC<UserProps> = ({
	photoURL,
	name,
	description,
	isLinkDescription,
}) => {
	return (
		<div className="flex items-center gap-3">
			<Avatar
				src={photoURL}
				alt={name}
				isRounded
				isZoom
				className="shrink-0"
			/>

			<div className="flex-1">
				<div className="text-sm font-semibold">{name}</div>

				{isLinkDescription ? (
					<a
						href={description}
						target="_blank"
						className="text-xs text-blue-600 underline"
					>
						{description}
					</a>
				) : (
					<div className="text-xs text-gray-700">{description}</div>
				)}
			</div>
		</div>
	);
};

export default memo(User);
