import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { type buttonVariants } from './index' // Import as type only

export type SpinnerProps = {
  className?: string
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    loaderPosition?: 'left' | 'right'
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }
