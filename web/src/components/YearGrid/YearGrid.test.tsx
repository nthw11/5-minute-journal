import { render } from '@redwoodjs/testing/web'

import YearGrid from './YearGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('YearGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YearGrid />)
    }).not.toThrow()
  })
})
