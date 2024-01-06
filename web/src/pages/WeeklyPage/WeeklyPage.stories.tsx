import type { Meta, StoryObj } from '@storybook/react'

import WeeklyPage from './WeeklyPage'

const meta: Meta<typeof WeeklyPage> = {
  component: WeeklyPage,
}

export default meta

type Story = StoryObj<typeof WeeklyPage>

export const Primary: Story = {}
