import React from 'react'

interface ButtonProps {
    text: string,
    icon?: React.ReactNode,
    variant: 'dark' | 'orange' | 'transparent',
    action: () => void,
    disabled?: boolean
}

function Button({text, icon, variant, action, disabled}: ButtonProps) {
  return (
    <button onClick={action} disabled={disabled}>{text}</button>
  )
}

export default Button