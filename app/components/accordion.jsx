'use client'
import React, { useState } from 'react'

// interface AccordionItemProps {
//   title: string;
//   children: React.ReactNode;
// }

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none'
      >
        <span className='font-medium'>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className='px-4 py-2 text-gray-700'>{children}</div>}
    </div>
  )
}

const Accordion = ({ children }) => {
  return <div className='rounded-md border'>{children}</div>
}

export { AccordionItem, Accordion }
