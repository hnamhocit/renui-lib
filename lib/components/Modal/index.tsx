'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { FC, memo } from 'react'

interface ModalProps {
	children: React.ReactNode
	isOpen: boolean
	onOpenChange: () => void
}

const Modal: FC<ModalProps> = ({ isOpen, children, onOpenChange }) => {
	return (
		<div
			onClick={onOpenChange}
			className={clsx(
				'fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,.5)] transition-all duration-300',
				isOpen ? 'visible' : 'invisible',
			)}>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.5, opacity: 0 }}
						className={clsx('bg-white rounded-2xl min-w-80')}
						onClick={(e) => e.stopPropagation()}>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default memo(Modal)
