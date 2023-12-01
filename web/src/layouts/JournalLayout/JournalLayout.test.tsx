import { render } from '@redwoodjs/testing/web'

import JournalLayout from './JournalLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JournalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JournalLayout />)
    }).not.toThrow()
  })
})
