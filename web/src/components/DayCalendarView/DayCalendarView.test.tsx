import { render } from '@redwoodjs/testing/web'

import DayCalendarView from './DayCalendarView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DayCalendarView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DayCalendarView />)
    }).not.toThrow()
  })
})
