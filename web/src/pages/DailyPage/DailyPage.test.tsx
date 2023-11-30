import { render } from '@redwoodjs/testing/web'

import DailyPage from './DailyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DailyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DailyPage />)
    }).not.toThrow()
  })
})
