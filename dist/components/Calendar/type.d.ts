import { DayButton, DayPicker } from 'react-day-picker';
import { Button } from '..';
import * as React from 'react';
export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant'];
};
export type CalendarDayButtonProps = React.ComponentProps<typeof DayButton>;
