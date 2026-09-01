import React from 'react'

interface inputProps {
    label: string,
    placeholder: string,
    type: 'text' | 'number' | 'date' | 'email'
    value: string,
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent = ({label, placeholder, type, value, onchange}: inputProps) => {
  return (
    <label className='label_input'>
        <span className='label'>{label}</span>
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={onchange} />
    </label>
)
}

export default InputComponent