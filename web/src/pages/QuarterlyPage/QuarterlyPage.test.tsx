import { render } from '@redwoodjs/testing/web'

import QuarterlyPage from './QuarterlyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('QuarterlyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuarterlyPage />)
    }).not.toThrow()
  })
})
