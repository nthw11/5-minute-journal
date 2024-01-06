import { render } from '@redwoodjs/testing/web'

import NotesArea from './NotesArea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotesArea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotesArea />)
    }).not.toThrow()
  })
})
