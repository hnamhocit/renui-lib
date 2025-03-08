'use client'

import React, { FC } from 'react'

interface ModalBodyProps {
	children: React.ReactNode
}

const ModalBody: FC<ModalBodyProps> = ({ children }) => {
	return <div className='p-4 space-y-2'>{children}</div>
}

export default ModalBody
