import { Size } from '../../lib/types';
import * as React from 'react';
export type { Size };
export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    size?: Size;
};
