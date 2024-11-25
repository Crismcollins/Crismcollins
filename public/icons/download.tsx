import { colors } from '@/helpers/themes';
import { IconProps } from '@/types/theme';
import React from 'react'

const Download = ({
  height,
  size,
  width,
  color,
}: IconProps) => {

  const validColor = color ?? 'text' in colors ? color : "text";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? height}
      width={size ?? width}
    >
      <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z" fill={colors[validColor as keyof typeof colors]} />
      <path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z" fill={colors[validColor as keyof typeof colors]} />
    </svg>
  )
}

export default Download;