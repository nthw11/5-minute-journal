import { render } from '@redwoodjs/testing/web'

import AccountNav from './AccountNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AccountNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountNav />)
    }).not.toThrow()
  })
})
