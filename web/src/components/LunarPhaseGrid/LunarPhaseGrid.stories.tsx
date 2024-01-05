// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import LunarPhaseGrid from './MoonPhase'

const meta: Meta<typeof LunarPhaseGrid> = {
  component: LunarPhaseGrid,
}

export default meta

type Story = StoryObj<typeof LunarPhaseGrid>

export const Primary: Story = {}
