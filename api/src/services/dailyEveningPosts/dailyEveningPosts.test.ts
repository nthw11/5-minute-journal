import type { DailyEveningPost } from '@prisma/client'

import {
  dailyEveningPosts,
  dailyEveningPost,
  createDailyEveningPost,
  updateDailyEveningPost,
  deleteDailyEveningPost,
} from './dailyEveningPosts'
import type { StandardScenario } from './dailyEveningPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dailyEveningPosts', () => {
  scenario(
    'returns all dailyEveningPosts',
    async (scenario: StandardScenario) => {
      const result = await dailyEveningPosts()

      expect(result.length).toEqual(
        Object.keys(scenario.dailyEveningPost).length
      )
    }
  )

  scenario(
    'returns a single dailyEveningPost',
    async (scenario: StandardScenario) => {
      const result = await dailyEveningPost({
        id: scenario.dailyEveningPost.one.id,
      })

      expect(result).toEqual(scenario.dailyEveningPost.one)
    }
  )

  scenario('creates a dailyEveningPost', async () => {
    const result = await createDailyEveningPost({
      input: {
        date: '2023-12-02T23:18:40.101Z',
        time: 'String',
        productivity: 1163380,
        lessonsLearned: 'String',
        mistakesMade: 'String',
        attitude: 5122518,
        positiveEvents: 'String',
        peopleMet: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:18:40.101Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:18:40.101Z'))
    expect(result.time).toEqual('String')
    expect(result.productivity).toEqual(1163380)
    expect(result.lessonsLearned).toEqual('String')
    expect(result.mistakesMade).toEqual('String')
    expect(result.attitude).toEqual(5122518)
    expect(result.positiveEvents).toEqual('String')
    expect(result.peopleMet).toEqual('String')
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:18:40.101Z'))
  })

  scenario('updates a dailyEveningPost', async (scenario: StandardScenario) => {
    const original = (await dailyEveningPost({
      id: scenario.dailyEveningPost.one.id,
    })) as DailyEveningPost
    const result = await updateDailyEveningPost({
      id: original.id,
      input: { date: '2023-12-03T23:18:40.102Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:18:40.102Z'))
  })

  scenario('deletes a dailyEveningPost', async (scenario: StandardScenario) => {
    const original = (await deleteDailyEveningPost({
      id: scenario.dailyEveningPost.one.id,
    })) as DailyEveningPost
    const result = await dailyEveningPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
