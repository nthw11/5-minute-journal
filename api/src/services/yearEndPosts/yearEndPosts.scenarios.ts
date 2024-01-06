import type { Prisma, YearEndPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.YearEndPostCreateArgs>({
  yearEndPost: {
    one: {
      data: {
        date: '2023-12-02T23:20:15.220Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:20:15.220Z',
        user: {
          create: {
            name: 'String',
            email: 'String9972936',
            updatedAt: '2023-12-02T23:20:15.220Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:20:15.220Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:20:15.220Z',
        user: {
          create: {
            name: 'String',
            email: 'String624420',
            updatedAt: '2023-12-02T23:20:15.220Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<YearEndPost, 'yearEndPost'>
