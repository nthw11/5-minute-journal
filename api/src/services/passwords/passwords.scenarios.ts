import type { Prisma, Password } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PasswordCreateArgs>({
  password: {
    one: {
      data: {
        hashed: 'String',
        updatedAt: '2023-12-02T23:16:41.334Z',
        user: {
          create: {
            name: 'String',
            email: 'String518661',
            updatedAt: '2023-12-02T23:16:41.335Z',
          },
        },
      },
    },
    two: {
      data: {
        hashed: 'String',
        updatedAt: '2023-12-02T23:16:41.335Z',
        user: {
          create: {
            name: 'String',
            email: 'String1737833',
            updatedAt: '2023-12-02T23:16:41.335Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Password, 'password'>
