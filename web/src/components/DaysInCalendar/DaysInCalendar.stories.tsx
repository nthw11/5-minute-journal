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

import DaysInCalendar from './DaysInCalendar'

const meta: Meta<typeof DaysInCalendar> = {
  component: DaysInCalendar,
}

export default meta

type Story = StoryObj<typeof DaysInCalendar>

export const Primary: Story = {}
