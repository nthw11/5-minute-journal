import { render } from '@redwoodjs/testing/web'

import PrintHide from './PrintHide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrintHide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrintHide />)
    }).not.toThrow()
  })
})
