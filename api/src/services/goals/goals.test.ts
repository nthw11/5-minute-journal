import type { Goal } from '@prisma/client'

import { goals, goal, createGoal, updateGoal, deleteGoal } from './goals'
import type { StandardScenario } from './goals.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('goals', () => {
  scenario('returns all goals', async (scenario: StandardScenario) => {
    const result = await goals()

    expect(result.length).toEqual(Object.keys(scenario.goal).length)
  })

  scenario('returns a single goal', async (scenario: StandardScenario) => {
    const result = await goal({ id: scenario.goal.one.id })

    expect(result).toEqual(scenario.goal.one)
  })

  scenario('creates a goal', async () => {
    const result = await createGoal({
      input: {
        date: '2023-12-02T23:21:09.243Z',
        priority: 4062693,
        status: 5443805,
        label: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:21:09.243Z',
      },
    })

    expect(result.date).toEqual(new Date('2023-12-02T23:21:09.243Z'))
    expect(result.priority).toEqual(4062693)
    expect(result.status).toEqual(5443805)
    expect(result.label).toEqual('String')
    expect(result.tags).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:21:09.243Z'))
  })

  scenario('updates a goal', async (scenario: StandardScenario) => {
    const original = (await goal({ id: scenario.goal.one.id })) as Goal
    const result = await updateGoal({
      id: original.id,
      input: { date: '2023-12-03T23:21:09.243Z' },
    })

    expect(result.date).toEqual(new Date('2023-12-03T23:21:09.243Z'))
  })

  scenario('deletes a goal', async (scenario: StandardScenario) => {
    const original = (await deleteGoal({ id: scenario.goal.one.id })) as Goal
    const result = await goal({ id: original.id })

    expect(result).toEqual(null)
  })
})
