import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        date: '2023-12-02T23:21:22.482Z',
        time: 'String',
        title: 'String',
        description: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:21:22.482Z',
      },
    },
    two: {
      data: {
        date: '2023-12-02T23:21:22.482Z',
        time: 'String',
        title: 'String',
        description: 'String',
        tags: 'String',
        updatedAt: '2023-12-02T23:21:22.482Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
