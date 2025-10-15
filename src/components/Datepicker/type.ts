import { InputProps } from '../Input/type'

export type DatepickerProps = Omit<
  InputProps,
  'value' | 'onChange' | 'defaultValue'
> & {
  value?: Date
  onChange?: (date?: Date) => void
  defaultValue?: Date
  format?: string
  minDate?: Date
  maxDate?: Date
}
