import type { Meta, StoryObj } from '@storybook/react'

import DailyPage from './DailyPage'

const meta: Meta<typeof DailyPage> = {
  component: DailyPage,
}

export default meta

type Story = StoryObj<typeof DailyPage>

export const Primary: Story = {}
