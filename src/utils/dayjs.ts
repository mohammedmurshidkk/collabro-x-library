import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

export const DATE_FORMAT = 'DD-MM-YYYY'
export const DATE_FORMAT_ISO = 'YYYY-MM-DD'
export const DATETIME_FORMAT = 'DD-MM-YYYY HH:mm:ss'
export const DATETIME_FORMAT_ISO = 'YYYY-MM-DDTHH:mm:ssZ'

export const formatDate = (
  date: Date | string,
  format: string = DATE_FORMAT
) => {
  return dayjs(date).format(format)
}

export const toUTC = (date: Date | string) => {
  return dayjs(date).utc()
}

export const isValidDate = (date: Date | string) => {
  return dayjs(date).isValid()
}

export const parseDate = (date: string, format: string = DATE_FORMAT) => {
  return dayjs(date, format)
}

export { dayjs }
