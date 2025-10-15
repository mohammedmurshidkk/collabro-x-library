import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './index';
import * as React from 'react';
export type SpinnerProps = {
    className?: string;
};
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loaderPosition?: 'left' | 'right';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};
