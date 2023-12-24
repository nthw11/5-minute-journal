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

import MonthsInCalendar from './MonthsInCalendar'

const meta: Meta<typeof MonthsInCalendar> = {
  component: MonthsInCalendar,
}

export default meta

type Story = StoryObj<typeof MonthsInCalendar>

export const Primary: Story = {}
