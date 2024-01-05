import { render } from '@redwoodjs/testing/web'

import LunarPhaseGrid from './MoonPhase'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LunarPhaseGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LunarPhaseGrid />)
    }).not.toThrow()
  })
})
