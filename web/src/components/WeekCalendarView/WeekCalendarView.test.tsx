import { render } from '@redwoodjs/testing/web'

import WeekCalendarView from './WeekCalendarView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WeekCalendarView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeekCalendarView />)
    }).not.toThrow()
  })
})
