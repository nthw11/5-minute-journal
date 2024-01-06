import type { Password } from '@prisma/client'

import {
  passwords,
  password,
  createPassword,
  updatePassword,
  deletePassword,
} from './passwords'
import type { StandardScenario } from './passwords.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('passwords', () => {
  scenario('returns all passwords', async (scenario: StandardScenario) => {
    const result = await passwords()

    expect(result.length).toEqual(Object.keys(scenario.password).length)
  })

  scenario('returns a single password', async (scenario: StandardScenario) => {
    const result = await password({ id: scenario.password.one.id })

    expect(result).toEqual(scenario.password.one)
  })

  scenario('creates a password', async () => {
    const result = await createPassword({
      input: { hashed: 'String', updatedAt: '2023-12-02T23:16:41.304Z' },
    })

    expect(result.hashed).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-12-02T23:16:41.304Z'))
  })

  scenario('updates a password', async (scenario: StandardScenario) => {
    const original = (await password({
      id: scenario.password.one.id,
    })) as Password
    const result = await updatePassword({
      id: original.id,
      input: { hashed: 'String2' },
    })

    expect(result.hashed).toEqual('String2')
  })

  scenario('deletes a password', async (scenario: StandardScenario) => {
    const original = (await deletePassword({
      id: scenario.password.one.id,
    })) as Password
    const result = await password({ id: original.id })

    expect(result).toEqual(null)
  })
})
