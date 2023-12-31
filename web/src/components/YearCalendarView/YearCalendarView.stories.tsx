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

import YearCalendarView from './YearCalendarView'

const meta: Meta<typeof YearCalendarView> = {
  component: YearCalendarView,
}

export default meta

type Story = StoryObj<typeof YearCalendarView>

export const Primary: Story = {}
