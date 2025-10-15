import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../src/components/Popover'
import { Button } from '../src/components/Button'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">This is the popover content.</div>
      </PopoverContent>
    </Popover>
  ),
}
