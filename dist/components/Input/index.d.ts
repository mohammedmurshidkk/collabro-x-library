import { Size } from './type';
import * as React from 'react';
declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    size?: Size;
} & React.RefAttributes<HTMLInputElement>>;
export { Input };
