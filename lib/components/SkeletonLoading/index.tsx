'use client'

import clsx from 'clsx'
import { FC, memo } from 'react'

interface SkeletonLoadingProps {
	className?: string
}

const SkeletonLoading: FC<SkeletonLoadingProps> = ({ className }) => {
	return (
		<div
			className={clsx(
				className,
				'bg-gray-200 animate-pulse rounded-md shadow-md',
			)}></div>
	)
}

export default memo(SkeletonLoading)
