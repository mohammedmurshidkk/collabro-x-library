import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputProps, Size } from './type' // Import InputProps
import { labelSizeVariants, placeholderSizeVariants } from '@/lib/variants'

const inputSizeVariants: Record<Size, string> = {
  sm: 'h-10 text-sm',
  md: 'h-12 text-base',
  lg: 'h-14 text-lg',
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      errorMessage,
      size = 'md',
      placeholder,
      onFocus,
      onBlur,
      onChange,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const id = React.useId() // Generate a unique ID for accessibility
    const [isFocused, setIsFocused] = React.useState(false)

    const isControlled = value !== undefined
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? value ?? ''
    )

    const hasValue = isControlled ? value !== '' : internalValue !== ''
    const isFloating = isFocused || hasValue

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    return (
      <div className="w-full">
        <div className="relative group" data-floating={isFloating}>
          <input
            id={id}
            type={type}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            placeholder={isFloating ? placeholder : ''}
            className={cn(
              'peer flex w-full rounded-md border bg-white px-3 py-2 transition-colors file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none disabled:cursor-not-allowed',
              'placeholder:text-[#C3C7C8] placeholder:font-light',
              // Base styles
              'border-border text-gray-900',
              // Hover styles
              'hover:border-focus',
              // Focus styles
              'focus:border-focus',
              inputSizeVariants[size],
              // Error styles
              error && 'border-destructive focus:border-destructive',
              // Disabled styles
              'disabled:border-disabled-border disabled:bg-disabled-background disabled:text-disabled',
              className
            )}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              'absolute left-3 loader z-10 origin-[0] transform px-1 duration-300',
              // Base placeholder styles
              'top-1/2 -translate-y-1/2',
              isFloating
                ? labelSizeVariants[size]
                : placeholderSizeVariants[size],
              // Float label up when data-floating is true
              'group-data-[floating=true]:top-0 group-data-[floating=true]:-translate-y-1/2 group-data-[floating=true]:scale-75',
              // Background color only when floating
              isFloating &&
                (props.disabled ? 'bg-disabled-background' : 'bg-white'),
              // Color states
              props.disabled
                ? 'text-disabled'
                : error
                  ? 'text-destructive'
                  : isFloating
                    ? isFocused
                      ? 'text-focus'
                      : 'text-label'
                    : 'text-placeholder'
            )}
          >
            {label}
          </label>
        </div>
        {error && errorMessage && (
          <p className="mt-1 text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
