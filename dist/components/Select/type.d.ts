import { GroupBase, Props as ReactSelectProps } from 'react-select';
import { Size } from '../../lib/types';
export type SelectOption = {
    value: string;
    label: string;
    [key: string]: any;
};
export type SelectProps<Option extends SelectOption = SelectOption, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = ReactSelectProps<Option, IsMulti, Group> & {
    label?: string;
    errorMessage?: string;
    isInvalid?: boolean;
    containerClassName?: string;
    size?: Size;
    floating?: boolean;
};
