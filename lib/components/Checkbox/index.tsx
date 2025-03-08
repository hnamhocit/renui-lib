'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Color, Size } from '../../types'

interface CheckboxProps {
	checked: boolean
	onChecked: Dispatch<SetStateAction<boolean>>
	size?: Size
	className?: string
	description?: string
	color?: Color
}

const variants = {
	sizes: {
		lg: 'w-7 h-7',
		md: 'w-5 h-5',
		sm: 'w-4 h-4',
	},
	colors: {
		default: 'bg-gray-900 !border-gray-950',
		primary: 'bg-blue-600 !border-blue-700',
		secondary: 'bg-indigo-600 !border-indigo-700',
		success: 'bg-green-600 !border-green-700',
		warning: 'bg-amber-600 !border-amber-700',
		danger: 'bg-red-600 !border-red-700',
	},
}

const Checkbox: FC<CheckboxProps> = ({
	checked,
	onChecked,
	description,
	size = 'md',
	className,
	color = 'default',
}) => {
	return (
		<div className='flex items-center gap-2'>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => onChecked((prev) => !prev)}
				className={clsx(
					'rounded-md shrink-0 border-2 border-gray-200 flex text-white items-center justify-center shadow transition',
					checked && variants.colors[color],
					variants.sizes[size],
					className,
				)}>
				<AnimatePresence>
					{checked && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							exit={{ opacity: 0, scale: 0 }}
							animate={{ scale: 1, opacity: 1 }}>
							<FaCheck
								className={clsx(
									variants.sizes[size],
									'scale-80',
								)}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			{description && (
				<div className='text-sm text-gray-500'>{description}</div>
			)}
		</div>
	)
}

export default memo(Checkbox)
