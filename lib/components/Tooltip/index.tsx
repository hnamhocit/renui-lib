'use client'

import clsx from 'clsx'
import { FC, memo, ReactNode, useState } from 'react'

import { Color, Position, Size } from '../../types'

interface TooltipProps {
	children: ReactNode
	content: ReactNode
	position?: Position
	color?: Color
	size?: Size
	variant?: TooltipVariant
	rounded?: boolean
	className?: string
}

export type TooltipVariant = 'solid' | 'border' | 'flat'

const Tooltip: FC<TooltipProps> = ({
	children,
	content,
	variant = 'solid',
	position = 'top-right',
	size = 'md',
	color = 'default',
	rounded,
	className,
}) => {
	const [isHover, setIsHover] = useState(false)

	const variants = {
		sizes: {
			sm: 'py-1 px-2',
			md: 'py-2 px-3',
			lg: 'py-3 px-4',
		},
		positions: {
			'top-right': 'top-0 left-full translate-x-2',
			'top-left': 'top-0 right-full -translate-x-2',
			'bottom-right': 'bottom-0 left-full translate-x-2',
			'bottom-left': 'bottom-0 right-full -translate-x-2',
			'top-center':
				'bottom-full left-1/2 -translate-y-2 -translate-x-1/2',
			'right-center': 'top-1/2 left-full translate-x-2 -translate-y-1/2',
			'bottom-center': 'top-full translate-y-2 left-1/2 -translate-x-1/2',
			'left-center': 'top-1/2 right-full -translate-x-2 -translate-y-1/2',
		},
		variants: {
			solid: 'text-white',
			border: 'border-2 !bg-white',
			flat: {
				default: 'bg-gray-400 border-gray-900',
				primary: 'bg-blue-400 border-blue-600',
				secondary: 'bg-indigo-400 border-indigo-600',
				success: 'bg-green-400 border-green-600',
				warning: 'bg-amber-400 border-amber-600',
				danger: 'bg-red-400 border-red-600',
			},
		},
		colors: {
			default: 'bg-gray-900 border-gray-900 text-gray-900',
			primary: 'bg-blue-600 border-blue-600 text-blue-600',
			secondary: 'bg-indigo-600 border-indigo-600 text-indigo-600',
			success: 'bg-green-600 border-green-600 text-green-600',
			warning: 'bg-amber-600 border-amber-600 text-amber-600',
			danger: 'bg-red-600 border-red-600 text-red-600',
		},
	}
	return (
		<div
			className='relative inline-block'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div
				className={clsx(
					'absolute max-w-60 max-h-60 w-max rounded-md text-xs transition-all font-medium shadow-md z-10 overflow-y-scroll scrollbar-hide space-y-2',
					variants.sizes[size],
					variants.positions[position],
					variant === 'flat'
						? 'text-white border-2 ' + variants.variants.flat[color]
						: variants.variants[variant] +
								' ' +
								variants.colors[color],
					rounded && '!rounded-full',
					className,
					{
						'opacity-0 scale-0 invisible': !isHover,
						'opacity-100 scale-100 visible': isHover,
					},
				)}>
				{content}
			</div>

			{children}
		</div>
	)
}

export default memo(Tooltip)
