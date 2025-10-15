import { SelectOption } from './type';
import { Size } from '../../lib/types';
import * as React from 'react';
declare const SelectComponent: React.ForwardRefExoticComponent<Omit<import('node_modules/react-select/dist/declarations/src/Select').PublicBaseSelectProps<SelectOption, false, import('react-select').GroupBase<SelectOption>>, "value" | "onChange" | "inputValue" | "menuIsOpen" | "onInputChange" | "onMenuOpen" | "onMenuClose"> & Partial<import('node_modules/react-select/dist/declarations/src/Select').PublicBaseSelectProps<SelectOption, false, import('react-select').GroupBase<SelectOption>>> & import('node_modules/react-select/dist/declarations/src/useStateManager').StateManagerAdditionalProps<SelectOption> & {
    label?: string;
    errorMessage?: string;
    isInvalid?: boolean;
    containerClassName?: string;
    size?: Size;
    floating?: boolean;
} & React.RefAttributes<any>>;
export { SelectComponent as Select };
