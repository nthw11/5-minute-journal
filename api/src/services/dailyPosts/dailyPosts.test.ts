import type { DailyMorningPost } from '@prisma/client'

import {
  dailyMorningPosts,
  dailyMorningPost,
  createDailyMorningPost,
  updateDailyMorningPost,
  deleteDailyMorningPost,
} from './dailyPosts'
import type { StandardScenario } from './dailyPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dailyMorningPosts', () => {
  scenario(
    'returns all dailyMorningPosts',
    async (scenario: StandardScenario) => {
      const result = await dailyMorningPosts()

      expect(result.length).toEqual(
        Object.keys(scenario.dailyMorningPost).length
      )
    }
  )

  scenario(
    'returns a single dailyMorningPost',
    async (scenario: StandardScenario) => {
      const result = await dailyMorningPost({
        id: scenario.dailyMorningPost.one.id,
      })

      expect(result).toEqual(scenario.dailyMorningPost.one)
    }
  )

  scenario('creates a dailyMorningPost', async () => {
    const result = await createDailyMorningPost({
      input: {
        date: '2023-12-02T23:17:54.914Z',
        time: 'String',
        hoursSlept: 9796586,
        attitude: 974143,
        gratitudePosts: 'String',
        dailyIntentions: 'String',
        dreams: 'String',
        morningRoutine: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:17:54.914Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:17:54.914Z'))
    expect(result.time).toEqual('String')
    expect(result.hoursSlept).toEqual(9796586)
    expect(result.attitude).toEqual(974143)
    expect(result.gratitudePosts).toEqual('String')
    expect(result.dailyIntentions).toEqual('String')
    expect(result.dreams).toEqual('String')
    expect(result.morningRoutine).toEqual('String')
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:17:54.914Z'))
  })

  scenario('updates a dailyMorningPost', async (scenario: StandardScenario) => {
    const original = (await dailyMorningPost({
      id: scenario.dailyMorningPost.one.id,
    })) as DailyMorningPost
    const result = await updateDailyMorningPost({
      id: original.id,
      input: { date: '2023-12-03T23:17:54.914Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:17:54.914Z'))
  })

  scenario('deletes a dailyMorningPost', async (scenario: StandardScenario) => {
    const original = (await deleteDailyMorningPost({
      id: scenario.dailyMorningPost.one.id,
    })) as DailyMorningPost
    const result = await dailyMorningPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
