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

import DayView from './DayView'

const meta: Meta<typeof DayView> = {
  component: DayView,
}

export default meta

type Story = StoryObj<typeof DayView>

export const Primary: Story = {}
