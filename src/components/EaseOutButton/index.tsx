import React, { HTMLAttributes, ReactNode } from 'react'

type EaseOutButtonProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const EaseOutButton = ({
  children,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  onClick
}: EaseOutButtonProps) => {

  return (
    <button
      type='button'
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        transform transition duration-150 ease-in-out active:scale-75
        ${className}
        `}
      style={ style }
    >
      {children}
    </button>
  )
}

export default EaseOutButton;
