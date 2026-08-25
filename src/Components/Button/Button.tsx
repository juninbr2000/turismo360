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
    <button onClick={action} className={`button ${variant}`} disabled={disabled}>{text} {icon}</button>
  )
}

export default Button