import type { Meta, StoryObj } from '@storybook/react'

import JournalLayout from './JournalLayout'

const meta: Meta<typeof JournalLayout> = {
  component: JournalLayout,
}

export default meta

type Story = StoryObj<typeof JournalLayout>

export const Primary: Story = {}
