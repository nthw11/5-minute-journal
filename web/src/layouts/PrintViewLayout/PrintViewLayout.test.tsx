import { render } from '@redwoodjs/testing/web'

import PrintViewLayout from './PrintViewLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrintViewLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrintViewLayout />)
    }).not.toThrow()
  })
})
