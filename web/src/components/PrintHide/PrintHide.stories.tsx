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

import PrintHide from './PrintHide'

const meta: Meta<typeof PrintHide> = {
  component: PrintHide,
}

export default meta

type Story = StoryObj<typeof PrintHide>

export const Primary: Story = {}
