import type { WeeklyPost } from '@prisma/client'

import {
  weeklyPosts,
  weeklyPost,
  createWeeklyPost,
  updateWeeklyPost,
  deleteWeeklyPost,
} from './weeklyPosts'
import type { StandardScenario } from './weeklyPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('weeklyPosts', () => {
  scenario('returns all weeklyPosts', async (scenario: StandardScenario) => {
    const result = await weeklyPosts()

    expect(result.length).toEqual(Object.keys(scenario.weeklyPost).length)
  })

  scenario(
    'returns a single weeklyPost',
    async (scenario: StandardScenario) => {
      const result = await weeklyPost({ id: scenario.weeklyPost.one.id })

      expect(result).toEqual(scenario.weeklyPost.one)
    }
  )

  scenario('creates a weeklyPost', async () => {
    const result = await createWeeklyPost({
      input: {
        date: '2023-12-02T23:19:35.315Z',
        time: 'String',
        productivity: 568018,
        tags: 'String',
        updatedAt: '2023-12-02T23:19:35.315Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:19:35.315Z'))
    expect(result.time).toEqual('String')
    expect(result.productivity).toEqual(568018)
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:19:35.315Z'))
  })

  scenario('updates a weeklyPost', async (scenario: StandardScenario) => {
    const original = (await weeklyPost({
      id: scenario.weeklyPost.one.id,
    })) as WeeklyPost
    const result = await updateWeeklyPost({
      id: original.id,
      input: { date: '2023-12-03T23:19:35.315Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:19:35.315Z'))
  })

  scenario('deletes a weeklyPost', async (scenario: StandardScenario) => {
    const original = (await deleteWeeklyPost({
      id: scenario.weeklyPost.one.id,
    })) as WeeklyPost
    const result = await weeklyPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
