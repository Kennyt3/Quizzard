import React, { InputHTMLAttributes } from 'react'

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full rounded-md border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}
