import React from 'react'

const Button = ({className, text}) => {
  return (
    <button className={`bg-blue-600 text-gray-200 px-3 py-1 rounded-md ${className}`}>{text}</button>
  )
}

export default Button