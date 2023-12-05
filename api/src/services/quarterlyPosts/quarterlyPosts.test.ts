import type { QuarterlyPost } from '@prisma/client'

import {
  quarterlyPosts,
  quarterlyPost,
  createQuarterlyPost,
  updateQuarterlyPost,
  deleteQuarterlyPost,
} from './quarterlyPosts'
import type { StandardScenario } from './quarterlyPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('quarterlyPosts', () => {
  scenario('returns all quarterlyPosts', async (scenario: StandardScenario) => {
    const result = await quarterlyPosts()

    expect(result.length).toEqual(Object.keys(scenario.quarterlyPost).length)
  })

  scenario(
    'returns a single quarterlyPost',
    async (scenario: StandardScenario) => {
      const result = await quarterlyPost({ id: scenario.quarterlyPost.one.id })

      expect(result).toEqual(scenario.quarterlyPost.one)
    }
  )

  scenario('creates a quarterlyPost', async () => {
    const result = await createQuarterlyPost({
      input: {
        date: '2023-12-02T23:19:51.704Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:19:51.704Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:19:51.704Z'))
    expect(result.time).toEqual('String')
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:19:51.704Z'))
  })

  scenario('updates a quarterlyPost', async (scenario: StandardScenario) => {
    const original = (await quarterlyPost({
      id: scenario.quarterlyPost.one.id,
    })) as QuarterlyPost
    const result = await updateQuarterlyPost({
      id: original.id,
      input: { date: '2023-12-03T23:19:51.705Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:19:51.705Z'))
  })

  scenario('deletes a quarterlyPost', async (scenario: StandardScenario) => {
    const original = (await deleteQuarterlyPost({
      id: scenario.quarterlyPost.one.id,
    })) as QuarterlyPost
    const result = await quarterlyPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
