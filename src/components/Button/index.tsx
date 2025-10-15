import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/utils'
import { Spinner } from './Spinner'
import { ButtonProps } from './type'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        'primary-outline':
          'border border-primary bg-transparent text-primary hover:bg-primary/10',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        'secondary-outline':
          'border border-secondary bg-transparent text-secondary hover:bg-secondary/10',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 min-w-36 px-4 py-2 text-sm',
        sm: 'h-9 min-w-28 rounded-md px-3 text-xs',
        lg: 'h-11 min-w-36 rounded-md px-8 text-base',
        xl: 'h-12 min-w-40 px-10 py-2 text-lg',
        icon: 'h-10 w-10 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        variant,
        size,
        asChild = false,
        loading = false,
        loaderPosition = 'right',
        leftIcon,
        rightIcon,
        children,
        ...props
      },
      ref
    ) => {
      const Comp = asChild ? Slot : 'button'

      const hasIcons = !!leftIcon || !!rightIcon

      let content

      if (loading) {
        if (asChild) {
          content = <Spinner />
        } else {
          const childrenWithLoader = (
            <>
              {loaderPosition === 'left' && <Spinner className="mr-1.5" />}
              {children}
              {loaderPosition === 'right' && <Spinner className="ml-1.5" />}
            </>
          )

          content = (
            <>
              {leftIcon}
              <span
                className={cn('flex items-center', { 'mx-auto': hasIcons })}
              >
                {childrenWithLoader}
              </span>
              {rightIcon}
            </>
          )
        }
      } else {
        content = (
          <>
            {leftIcon}
            <span className={cn('flex items-center', { 'mx-auto': hasIcons })}>
              {children}
            </span>
            {rightIcon}
          </>
        )
      }

      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }), {
            'justify-between': hasIcons,
          })}
          ref={ref}
          disabled={loading || props.disabled}
          {...props}
        >
          {content}
        </Comp>
      )
    }
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
