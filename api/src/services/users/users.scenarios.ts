import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String',
        email: 'String8182693',
        updatedAt: '2023-12-02T23:16:14.011Z',
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String9395507',
        updatedAt: '2023-12-02T23:16:14.011Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
