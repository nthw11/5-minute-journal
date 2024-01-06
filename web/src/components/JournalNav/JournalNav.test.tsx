import { render } from '@redwoodjs/testing/web'

import JournalNav from './JournalNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JournalNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JournalNav />)
    }).not.toThrow()
  })
})
