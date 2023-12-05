import type { Prisma, DailyMorningPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DailyMorningPostCreateArgs>({
  dailyMorningPost: {
    one: {
      data: {
        date: '2023-12-02T23:17:54.946Z',
        time: 'String',
        hoursSlept: 298080,
        attitude: 4527511,
        gratitudePosts: 'String',
        dailyIntentions: 'String',
        dreams: 'String',
        morningRoutine: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:17:54.946Z',
        user: {
          create: {
            name: 'String',
            email: 'String8122839',
            updatedAt: '2023-12-02T23:17:54.946Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:17:54.946Z',
        time: 'String',
        hoursSlept: 5772907,
        attitude: 9103894,
        gratitudePosts: 'String',
        dailyIntentions: 'String',
        dreams: 'String',
        morningRoutine: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:17:54.946Z',
        user: {
          create: {
            name: 'String',
            email: 'String3914917',
            updatedAt: '2023-12-02T23:17:54.946Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  DailyMorningPost,
  'dailyMorningPost'
>
