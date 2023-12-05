import type { Prisma, DailyEveningPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DailyEveningPostCreateArgs>({
  dailyEveningPost: {
    one: {
      data: {
        date: '2023-12-02T23:18:40.133Z',
        time: 'String',
        productivity: 6234654,
        lessonsLearned: 'String',
        mistakesMade: 'String',
        attitude: 8326722,
        positiveEvents: 'String',
        peopleMet: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:18:40.133Z',
        user: {
          create: {
            name: 'String',
            email: 'String1397664',
            updatedAt: '2023-12-02T23:18:40.133Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:18:40.133Z',
        time: 'String',
        productivity: 4571091,
        lessonsLearned: 'String',
        mistakesMade: 'String',
        attitude: 346536,
        positiveEvents: 'String',
        peopleMet: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:18:40.133Z',
        user: {
          create: {
            name: 'String',
            email: 'String4782383',
            updatedAt: '2023-12-02T23:18:40.133Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  DailyEveningPost,
  'dailyEveningPost'
>
