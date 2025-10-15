import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../src/components'
import { ChevronRight } from 'lucide-react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'primary-outline', 'secondary', 'secondary-outline'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    loaderPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    // size: 'lg',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    loading: true,
  },
}

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    leftIcon: <ChevronRight />,
    rightIcon: <ChevronRight />,
  },
}
