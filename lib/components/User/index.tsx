"use client";

import clsx from "clsx";
import { FC, memo } from "react";

import Avatar from "../Avatar";

interface UserProps {
	photoURL: string | undefined;
	name: string | undefined;
	description: string | undefined;
	isLinkDescription?: boolean;
	classNames?: UserClassNames;
}

interface UserClassNames {
	avatar?: string;
	name?: string;
	description?: string;
	container?: string;
}

const User: FC<UserProps> = ({
	photoURL,
	name,
	description,
	isLinkDescription,
	classNames,
}) => {
	return (
		<div className={clsx("flex items-center gap-3", classNames?.container)}>
			<Avatar
				src={photoURL}
				alt={name}
				isRounded
				isZoom
				className={clsx("shrink-0", classNames?.avatar)}
			/>

			<div className="flex-1">
				<div
					className={clsx("text-sm font-semibold", classNames?.name)}
				>
					{name}
				</div>

				{isLinkDescription ? (
					<a
						href={description}
						target="_blank"
						className={clsx(
							"text-xs text-blue-600 underline",
							classNames?.description
						)}
					>
						{description}
					</a>
				) : (
					<div
						className={clsx(
							"text-xs text-gray-700",
							classNames?.description
						)}
					>
						{description}
					</div>
				)}
			</div>
		</div>
	);
};

export default memo(User);
