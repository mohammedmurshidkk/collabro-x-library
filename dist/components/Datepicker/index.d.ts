import * as React from 'react';
declare const Datepicker: React.ForwardRefExoticComponent<Omit<import('../Input/type').InputProps, "value" | "defaultValue" | "onChange"> & {
    value?: Date;
    onChange?: (date?: Date) => void;
    defaultValue?: Date;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
} & React.RefAttributes<HTMLInputElement>>;
export { Datepicker };
