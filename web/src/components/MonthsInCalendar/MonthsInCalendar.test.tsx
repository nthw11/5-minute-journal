import { render } from '@redwoodjs/testing/web'

import MonthsInCalendar from './MonthsInCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MonthsInCalendar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MonthsInCalendar />)
    }).not.toThrow()
  })
})
