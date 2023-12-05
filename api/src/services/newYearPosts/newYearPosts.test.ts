import type { NewYearPost } from '@prisma/client'

import {
  newYearPosts,
  newYearPost,
  createNewYearPost,
  updateNewYearPost,
  deleteNewYearPost,
} from './newYearPosts'
import type { StandardScenario } from './newYearPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('newYearPosts', () => {
  scenario('returns all newYearPosts', async (scenario: StandardScenario) => {
    const result = await newYearPosts()

    expect(result.length).toEqual(Object.keys(scenario.newYearPost).length)
  })

  scenario(
    'returns a single newYearPost',
    async (scenario: StandardScenario) => {
      const result = await newYearPost({ id: scenario.newYearPost.one.id })

      expect(result).toEqual(scenario.newYearPost.one)
    }
  )

  scenario('creates a newYearPost', async () => {
    const result = await createNewYearPost({
      input: {
        date: '2023-12-02T23:20:50.470Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:20:50.470Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:20:50.470Z'))
    expect(result.time).toEqual('String')
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:20:50.470Z'))
  })

  scenario('updates a newYearPost', async (scenario: StandardScenario) => {
    const original = (await newYearPost({
      id: scenario.newYearPost.one.id,
    })) as NewYearPost
    const result = await updateNewYearPost({
      id: original.id,
      input: { date: '2023-12-03T23:20:50.470Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:20:50.470Z'))
  })

  scenario('deletes a newYearPost', async (scenario: StandardScenario) => {
    const original = (await deleteNewYearPost({
      id: scenario.newYearPost.one.id,
    })) as NewYearPost
    const result = await newYearPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
