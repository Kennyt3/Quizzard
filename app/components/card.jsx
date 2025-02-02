import React from 'react'

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg bg-white shadow-md ${className}`}>
      {children}
    </div>
  )
}

export const CardContent = ({ children }) => {
  return <div className='p-6'>{children}</div>
}
