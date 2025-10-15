import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
export declare const labelVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>;
