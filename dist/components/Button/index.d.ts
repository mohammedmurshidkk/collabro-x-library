import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Button: React.NamedExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & import('class-variance-authority').VariantProps<(props?: ({
    variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    asChild?: boolean;
    loading?: boolean;
    loaderPosition?: "left" | "right";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
