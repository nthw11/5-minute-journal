import type { YearEndPost } from '@prisma/client'

import {
  yearEndPosts,
  yearEndPost,
  createYearEndPost,
  updateYearEndPost,
  deleteYearEndPost,
} from './yearEndPosts'
import type { StandardScenario } from './yearEndPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('yearEndPosts', () => {
  scenario('returns all yearEndPosts', async (scenario: StandardScenario) => {
    const result = await yearEndPosts()

    expect(result.length).toEqual(Object.keys(scenario.yearEndPost).length)
  })

  scenario(
    'returns a single yearEndPost',
    async (scenario: StandardScenario) => {
      const result = await yearEndPost({ id: scenario.yearEndPost.one.id })

      expect(result).toEqual(scenario.yearEndPost.one)
    }
  )

  scenario('creates a yearEndPost', async () => {
    const result = await createYearEndPost({
      input: {
        date: '2023-12-02T23:20:15.193Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:20:15.193Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:20:15.193Z'))
    expect(result.time).toEqual('String')
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:20:15.193Z'))
  })

  scenario('updates a yearEndPost', async (scenario: StandardScenario) => {
    const original = (await yearEndPost({
      id: scenario.yearEndPost.one.id,
    })) as YearEndPost
    const result = await updateYearEndPost({
      id: original.id,
      input: { date: '2023-12-03T23:20:15.193Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:20:15.193Z'))
  })

  scenario('deletes a yearEndPost', async (scenario: StandardScenario) => {
    const original = (await deleteYearEndPost({
      id: scenario.yearEndPost.one.id,
    })) as YearEndPost
    const result = await yearEndPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
