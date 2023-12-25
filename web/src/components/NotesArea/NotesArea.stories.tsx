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

import NotesArea from './NotesArea'

const meta: Meta<typeof NotesArea> = {
  component: NotesArea,
}

export default meta

type Story = StoryObj<typeof NotesArea>

export const Primary: Story = {}
