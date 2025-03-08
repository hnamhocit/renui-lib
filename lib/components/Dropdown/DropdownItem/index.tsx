'use client'

import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'motion/react'
import { FC, memo } from 'react'

const DropdownItem: FC<Omit<HTMLMotionProps<'button'>, 'ref'>> = ({
	children,
	...props
}) => {
	return (
		<motion.button
			{...props}
			whileTap={{ scale: 0.95 }}
			className={clsx(
				'flex w-full hover:text-white items-center gap-3 p-2 rounded-md hover:bg-blue-600 transition',
				props.className,
			)}>
			{children}
		</motion.button>
	)
}

export default memo(DropdownItem)
