import type { Prisma, QuarterlyPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.QuarterlyPostCreateArgs>({
  quarterlyPost: {
    one: {
      data: {
        date: '2023-12-02T23:19:51.750Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:19:51.750Z',
        user: {
          create: {
            name: 'String',
            email: 'String5546368',
            updatedAt: '2023-12-02T23:19:51.750Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:19:51.750Z',
        time: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:19:51.750Z',
        user: {
          create: {
            name: 'String',
            email: 'String8319987',
            updatedAt: '2023-12-02T23:19:51.750Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<QuarterlyPost, 'quarterlyPost'>
