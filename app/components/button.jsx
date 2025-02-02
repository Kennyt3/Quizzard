import React from 'react'

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-indigo-600 hover:bg-indigo-500 rounded-md px-4 py-2 text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
