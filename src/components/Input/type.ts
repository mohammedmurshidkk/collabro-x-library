import * as React from 'react'
import { Size } from '@/lib/types'

export type { Size }

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  label?: string
  error?: boolean
  errorMessage?: string
  size?: Size
}
