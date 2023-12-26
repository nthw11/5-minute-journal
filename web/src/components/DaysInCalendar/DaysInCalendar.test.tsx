import { render } from '@redwoodjs/testing/web'

import DaysInCalendar from './DaysInCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DaysInCalendar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DaysInCalendar />)
    }).not.toThrow()
  })
})
