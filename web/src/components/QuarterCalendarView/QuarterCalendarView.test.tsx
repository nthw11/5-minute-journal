import { render } from '@redwoodjs/testing/web'

import QuarterCalendarView from './QuarterCalendarView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('QuarterCalendarView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuarterCalendarView />)
    }).not.toThrow()
  })
})
