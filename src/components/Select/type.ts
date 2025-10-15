import * as React from 'react'
import { GroupBase, Props as ReactSelectProps } from 'react-select'
import { Size } from '@/lib/types' // Import Size from Input's type definition

export type SelectOption = {
  value: string
  label: string
  [key: string]: any // Allow for additional properties
}

export type SelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ReactSelectProps<Option, IsMulti, Group> & {
  label?: string
  errorMessage?: string
  isInvalid?: boolean
  containerClassName?: string
  size?: Size
  floating?: boolean // Add floating prop
}
