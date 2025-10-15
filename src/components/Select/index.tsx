import * as React from 'react'
import { useState } from 'react'
import Select, {
  components,
  CSSObjectWithLabel,
  ControlProps,
} from 'react-select'
import { cn } from '@/lib/utils'
import { SelectProps, SelectOption } from './type'
import { ChevronDown } from 'lucide-react'
import { theme } from '@/lib/theme'
import { Size } from '@/lib/types'
import { labelSizeVariants, placeholderSizeVariants } from '@/lib/variants'

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown className="h-4 w-4 text-gray-500" />
    </components.DropdownIndicator>
  )
}

const selectSizeVariants: Record<
  Size,
  { minHeight: string; fontSize: string }
> = {
  sm: { minHeight: theme.componentHeight.sm, fontSize: theme.fontSize.sm },
  md: { minHeight: theme.componentHeight.md, fontSize: theme.fontSize.base },
  lg: { minHeight: theme.componentHeight.lg, fontSize: theme.fontSize.lg },
}

const SelectComponent = React.forwardRef<any, SelectProps>(
  (
    {
      className,
      containerClassName,
      label,
      errorMessage,
      isInvalid,
      placeholder = 'Select Option',
      size = 'md',
      floating = true,
      isDisabled,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const id = React.useId()
    const hasError = isInvalid || !!errorMessage
    const currentSize = selectSizeVariants[size]

    const [isFocused, setIsFocused] = useState(false)

    const value = props.value || props.defaultValue
    const hasValue = Array.isArray(value) ? value.length > 0 : !!value

    const isFloating = floating && (isFocused || hasValue)

    const handleFocus = (e: any) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: any) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const labelColorClass = isDisabled
      ? 'text-disabled'
      : hasError
        ? 'text-destructive'
        : isFloating
          ? isFocused
            ? 'text-focus'
            : 'text-label'
          : 'text-placeholder'

    const customStyles = {
      control: (
        base: CSSObjectWithLabel,
        state: ControlProps<SelectOption, any>
      ) => ({
        ...base,
        minHeight: currentSize.minHeight,
        borderRadius: theme.borderRadius.md,
        borderColor: state.isDisabled
          ? theme.colors['disabled-border']
          : hasError
            ? theme.colors.destructive
            : state.isFocused
              ? theme.colors.focus
              : theme.colors.border,
        boxShadow: 'none',
        '&:hover': {
          borderColor: hasError ? theme.colors.destructive : theme.colors.focus,
        },
        backgroundColor: state.isDisabled
          ? theme.colors['disabled-background']
          : theme.colors['primary-foreground'], // white
        color: theme.colors.label,
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        fontSize: currentSize.fontSize,
      }),
      valueContainer: (base: CSSObjectWithLabel) => ({
        ...base,
        padding: '0',
      }),
      input: (base: CSSObjectWithLabel) => ({
        ...base,
        color: theme.colors.label,
        margin: '0',
        padding: '0',
        fontSize: currentSize.fontSize,
      }),
      placeholder: (base: CSSObjectWithLabel, state: any) => ({
        ...base,
        color: state.isDisabled ? theme.colors.disabled : '#C3C7C8',
        fontWeight: theme.fontWeights.light,
        fontSize: currentSize.fontSize,
        display: isFloating ? 'block' : 'none',
      }),
      singleValue: (base: CSSObjectWithLabel, state: any) => ({
        ...base,
        color: state.isDisabled ? theme.colors.disabled : theme.colors.label,
        fontSize: currentSize.fontSize,
      }),
      indicatorSeparator: (base: CSSObjectWithLabel) => ({
        ...base,
        display: 'none',
      }),
      dropdownIndicator: (base: CSSObjectWithLabel, state: any) => ({
        ...base,
        color: theme.colors.placeholder,
        transition: 'transform 0.2s ease',
        transform: state.selectProps.menuIsOpen
          ? 'rotate(180deg)'
          : 'rotate(0deg)',
        padding: '0',
      }),
      menu: (base: CSSObjectWithLabel) => ({
        ...base,
        borderRadius: theme.borderRadius.md,
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
        marginTop: '0.5rem', // mt-2
        backgroundColor: theme.colors['primary-foreground'], // white
        zIndex: 9999,
      }),
      option: (base: CSSObjectWithLabel, state: any) => ({
        ...base,
        backgroundColor: state.isSelected ? theme.colors.accent : 'transparent',
        color: state.isSelected
          ? theme.colors['accent-foreground']
          : theme.colors.label,
        '&:active': {
          backgroundColor: theme.colors.accent,
        },
        cursor: 'pointer',
        padding: '0.5rem 0.75rem', // py-2 px-3
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: currentSize.fontSize,
        borderRadius: theme.borderRadius.md,
        boxShadow: state.isFocused
          ? `inset 0 0 0 1px ${theme.colors.focus}`
          : 'none',
      }),
      multiValue: (base: CSSObjectWithLabel) => ({
        ...base,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.borderRadius.sm,
      }),
      multiValueLabel: (base: CSSObjectWithLabel, state: any) => ({
        ...base,
        color: state.isDisabled
          ? theme.colors.disabled
          : theme.colors['secondary-foreground'],
      }),
      multiValueRemove: (base: CSSObjectWithLabel) => ({
        ...base,
        color: theme.colors['secondary-foreground'],
        '&:hover': {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.destructive,
        },
      }),
    }

    return (
      <div className={cn('w-full', containerClassName)}>
        <div className="relative group" data-floating={isFloating}>
          <Select<SelectOption, false>
            ref={ref}
            id={id}
            className={cn('w-full', className)}
            styles={customStyles}
            components={{
              DropdownIndicator,
            }}
            placeholder={isFloating ? placeholder : ''}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isDisabled={isDisabled}
            {...props}
          />
          {label && floating && (
            <label
              htmlFor={id}
              className={cn(
                'absolute left-3 z-10 origin-[0] transform px-1 duration-300',
                'top-1/2 -translate-y-1/2',
                isFloating
                  ? labelSizeVariants[size]
                  : placeholderSizeVariants[size],
                'group-data-[floating=true]:top-0 group-data-[floating=true]:-translate-y-1/2 group-data-[floating=true]:scale-75',
                isFloating &&
                  (isDisabled ? 'bg-disabled-background' : 'bg-white'),
                labelColorClass
              )}
            >
              {label}
            </label>
          )}
        </div>
        {hasError && errorMessage && (
          <p className="mt-1 text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    )
  }
)

SelectComponent.displayName = 'Select'

export { SelectComponent as Select }
