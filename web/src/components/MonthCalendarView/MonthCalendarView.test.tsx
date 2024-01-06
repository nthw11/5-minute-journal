import { render } from '@redwoodjs/testing/web'

import MonthCalendarView from './MonthCalendarView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MonthCalendarView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MonthCalendarView />)
    }).not.toThrow()
  })
})
