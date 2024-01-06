import { render } from '@redwoodjs/testing/web'

import YearCalendarView from './YearCalendarView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('YearCalendarView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YearCalendarView />)
    }).not.toThrow()
  })
})
