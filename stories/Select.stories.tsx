import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '../src/components/Select'
import { SelectOption } from '../src/components/Select/type'

const options: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
]

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isSearchable: { control: 'boolean' },
    isMulti: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
    options: { control: 'object' },
    floating: { control: 'boolean' }, // Add floating argType
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    options: options,
    placeholder: 'Select an option',
    containerClassName: 'min-w-[220px]',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label Name',
  },
}

export const Small: Story = {
  args: {
    label: 'Label Name',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Label Name',
    size: 'lg',
  },
}

export const Searchable: Story = {
  args: {
    label: 'Label Name',
    isSearchable: true,
    placeholder: 'Search here',
  },
}

export const WithSelectedOption: Story = {
  args: {
    label: 'Label Name',
    defaultValue: options[0],
  },
}

export const MultiSelect: Story = {
  args: {
    label: 'Label Name',
    isMulti: true,
    defaultValue: [options[0], options[2]],
  },
}

export const WithError: Story = {
  args: {
    label: 'Label Name',
    isInvalid: true,
    errorMessage: 'Error: Lorem ipsum',
    placeholder: 'Selected Option',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label Name',
    isDisabled: true,
  },
}

export const FloatingLabel: Story = {
  args: {
    label: 'Label Name',
    floating: true,
    placeholder: 'Select an option',
  },
}

export const FloatingLabelWithValue: Story = {
  args: {
    label: 'Label Name',
    floating: true,
    defaultValue: options[0],
  },
}

export const FloatingLabelSearchable: Story = {
  args: {
    label: 'Label Name',
    floating: true,
    isSearchable: true,
    placeholder: 'Search here',
  },
}

export const FloatingLabelWithError: Story = {
  args: {
    label: 'Label Name',
    floating: true,
    isInvalid: true,
    errorMessage: 'Error: Lorem ipsum',
    placeholder: 'Selected Option',
  },
}
