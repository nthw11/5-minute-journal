import type { Prisma, WeeklyPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WeeklyPostCreateArgs>({
  weeklyPost: {
    one: {
      data: {
        date: '2023-12-02T23:19:35.339Z',
        time: 'String',
        productivity: 5136748,
        tags: 'String',
        updatedAt: '2023-12-02T23:19:35.339Z',
        user: {
          create: {
            name: 'String',
            email: 'String768674',
            updatedAt: '2023-12-02T23:19:35.339Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:19:35.339Z',
        time: 'String',
        productivity: 5329490,
        tags: 'String',
        updatedAt: '2023-12-02T23:19:35.339Z',
        user: {
          create: {
            name: 'String',
            email: 'String4640670',
            updatedAt: '2023-12-02T23:19:35.339Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WeeklyPost, 'weeklyPost'>
