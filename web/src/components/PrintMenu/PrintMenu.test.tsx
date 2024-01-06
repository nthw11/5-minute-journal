import { render } from '@redwoodjs/testing/web'

import PrintMenu from './PrintMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrintMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrintMenu />)
    }).not.toThrow()
  })
})
