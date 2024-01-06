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

import PrintMenu from './PrintMenu'

const meta: Meta<typeof PrintMenu> = {
  component: PrintMenu,
}

export default meta

type Story = StoryObj<typeof PrintMenu>

export const Primary: Story = {}
