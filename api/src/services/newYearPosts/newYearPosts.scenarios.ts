import type { Prisma, NewYearPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NewYearPostCreateArgs>({
  newYearPost: {
    one: {
      data: {
        date: '2023-12-02T23:20:50.510Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:20:50.510Z',
        user: {
          create: {
            name: 'String',
            email: 'String5299870',
            updatedAt: '2023-12-02T23:20:50.510Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:20:50.510Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:20:50.510Z',
        user: {
          create: {
            name: 'String',
            email: 'String8431009',
            updatedAt: '2023-12-02T23:20:50.510Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<NewYearPost, 'newYearPost'>
