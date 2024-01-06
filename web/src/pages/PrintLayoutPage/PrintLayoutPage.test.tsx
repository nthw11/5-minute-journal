import { render } from '@redwoodjs/testing/web'

import PrintLayoutPage from './PrintLayoutPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrintLayoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrintLayoutPage />)
    }).not.toThrow()
  })
})
