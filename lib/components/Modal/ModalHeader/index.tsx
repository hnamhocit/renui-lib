'use client'

import { FC, ReactNode } from 'react'

interface ModalHeaderProps {
	children: ReactNode
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
	return (
		<div className='p-4 font-semibold text-xl border-b-2'>{children}</div>
	)
}

export default ModalHeader
