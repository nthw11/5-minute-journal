import { render } from '@redwoodjs/testing/web'

import DailyPostEntryForm from './DailyPostEntryForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DailyPostEntryForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DailyPostEntryForm />)
    }).not.toThrow()
  })
})
