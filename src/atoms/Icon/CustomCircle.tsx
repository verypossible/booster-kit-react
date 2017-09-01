/* tslint:disable:max-line-length */
import * as React from 'react'

import { Icon } from './index'

export function CustomCircle ({ color, fill, ...props }: Icon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill={fill || 'none'}
      stroke={color || fill}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <circle cx='12' cy='12' r='10' />
    </svg>
  )
}
