'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC, memo, ReactNode, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

interface AccordionProps {
	label: string
	children: ReactNode
}

const Accordion: FC<AccordionProps> = ({ label, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleIsOpen = () => setIsOpen((prev) => !prev)

	return (
		<div>
			<motion.button
				onClick={toggleIsOpen}
				whileTap={{ scale: 0.95 }}
				className='flex items-center gap-3 p-2 transition hover:bg-blue-600 font-semibold hover:text-white w-full rounded-t-md'>
				{label}

				{isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
			</motion.button>

			<div
				className={clsx(
					'transition-all scrollbar-hide duration-300 overflow-y-scroll',
					{
						'max-h-0': !isOpen,
						'max-h-80': isOpen,
					},
				)}>
				{children}
			</div>
		</div>
	)
}

export default memo(Accordion)
