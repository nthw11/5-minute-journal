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

import WeekCalendarView from './WeekCalendarView'

const meta: Meta<typeof WeekCalendarView> = {
  component: WeekCalendarView,
}

export default meta

type Story = StoryObj<typeof WeekCalendarView>

export const Primary: Story = {}
