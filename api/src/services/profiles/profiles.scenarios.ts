import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      data: {
        picture: 'String',
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        updatedAt: '2023-12-02T23:17:08.905Z',
        user: {
          create: {
            name: 'String',
            email: 'String3295202',
            updatedAt: '2023-12-02T23:17:08.905Z',
          },
        },
      },
    },
    two: {
      data: {
        picture: 'String',
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        updatedAt: '2023-12-02T23:17:08.905Z',
        user: {
          create: {
            name: 'String',
            email: 'String6831009',
            updatedAt: '2023-12-02T23:17:08.905Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
