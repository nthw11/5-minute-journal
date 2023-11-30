import type { Meta, StoryObj } from '@storybook/react'

import QuarterlyPage from './QuarterlyPage'

const meta: Meta<typeof QuarterlyPage> = {
  component: QuarterlyPage,
}

export default meta

type Story = StoryObj<typeof QuarterlyPage>

export const Primary: Story = {}
