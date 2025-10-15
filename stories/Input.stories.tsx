import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from '../src/components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'url'],
    },
    label: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    label: 'Label',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email',
    label: 'Email',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password',
  },
}

export const Error: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    label: 'Label',
    error: true,
    errorMessage: 'This is an error message',
  },
}
