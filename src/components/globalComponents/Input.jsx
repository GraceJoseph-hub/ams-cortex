import React from 'react'

const Input = ({label, type, onChange, value}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{label} :</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="w-full h-8 border rounded-md outline-none px-3 py-2"
      />
    </div>
  );
}

export default Input