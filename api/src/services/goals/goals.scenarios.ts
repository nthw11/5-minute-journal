import type { Prisma, Goal } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GoalCreateArgs>({
  goal: {
    one: {
      data: {
        date: '2023-12-02T23:21:09.265Z',
        priority: 5873910,
        status: 3992823,
        label: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:21:09.265Z',
        user: {
          create: {
            name: 'String',
            email: 'String6316945',
            updatedAt: '2023-12-02T23:21:09.265Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:21:09.265Z',
        priority: 6319821,
        status: 8274552,
        label: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:21:09.265Z',
        user: {
          create: {
            name: 'String',
            email: 'String3334292',
            updatedAt: '2023-12-02T23:21:09.265Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Goal, 'goal'>
