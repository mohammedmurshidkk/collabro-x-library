import * as React from 'react'
import { CalendarIcon } from 'lucide-react'
import { formatDate, isValidDate, parseDate } from '@/utils/dayjs'
import { Calendar, Popover, PopoverContent, PopoverTrigger, Input } from '..'
import { cn } from '@/utils'
import { DatepickerProps } from './type'

const convertDateFnsToDayjsFormat = (format: string) => {
  return format
    .replace(/dd/g, 'DD')
    .replace(/d/g, 'D')
    .replace(/yyyy/g, 'YYYY')
    .replace(/yy/g, 'YY')
}

const Datepicker = React.forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      value,
      onChange,
      defaultValue,
      label = '',
      onBlur,
      onFocus,
      className,
      onKeyDown,
      format: formatStr = 'dd-MM-yyyy',
      minDate,
      maxDate,
      ...props
    },
    ref
  ) => {
    const id = React.useId()
    const [open, setOpen] = React.useState(false)

    const [internalDate, setInternalDate] = React.useState(defaultValue)
    const isControlled = value !== undefined
    const date = isControlled ? value : internalDate

    const [month, setMonth] = React.useState(date)
    const [inputValue, setInputValue] = React.useState(
      date ? formatDate(date, convertDateFnsToDayjsFormat(formatStr)) : ''
    )

    React.useEffect(() => {
      if (date) {
        setInputValue(formatDate(date, convertDateFnsToDayjsFormat(formatStr)))
      } else {
        setInputValue('')
      }
    }, [date, formatStr])

    const handleSelect = (selectedDate?: Date) => {
      if (!isControlled) {
        setInternalDate(selectedDate)
      }
      onChange?.(selectedDate)
      setOpen(false)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const dayjsFormat = convertDateFnsToDayjsFormat(formatStr)
      const parsedDate = parseDate(e.target.value, dayjsFormat)
      if (isValidDate(parsedDate.toDate())) {
        if (!isControlled) {
          setInternalDate(parsedDate.toDate())
        }
        onChange?.(parsedDate.toDate())
        setMonth(parsedDate.toDate())
      } else if (e.target.value === '') {
        if (!isControlled) {
          setInternalDate(undefined)
        }
        onChange?.(undefined)
      } else {
        setInputValue(date ? formatDate(date, dayjsFormat) : '')
      }
      onBlur?.(e)
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(true)
      onFocus?.(e)
    }

    return (
      <div className="flex w-full flex-col gap-1.5">
        <div className="relative">
          <Input
            {...props}
            ref={ref}
            id={id}
            label={label}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            className={cn('pr-12', className)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setOpen(true)
              }
              onKeyDown?.(e)
            }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <CalendarIcon className="size-6" color="#CCD2D6" />
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleSelect}
                  month={month}
                  onMonthChange={setMonth}
                  captionLayout="dropdown"
                  fromYear={minDate?.getFullYear() ?? 1900}
                  toYear={maxDate?.getFullYear() ?? 2100}
                  disabled={{ before: minDate as Date, after: maxDate }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    )
  }
)

Datepicker.displayName = 'Datepicker'

export { Datepicker }
