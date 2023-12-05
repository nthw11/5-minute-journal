import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export const seed = async () => {
  const user = await db.user.create({
    data: {
      name: 'Alice',
      email: 'email@email.com',
      },
    })
  console.log(user)

  const dailyMorningPost = await db.dailyMorningPost.create({
    data: {
      date: new Date(),
      time: '7:00',
      hoursSlept: 7,
      attitude: 5,
      gratitudePosts: 'I am grateful for my health',
      dailyIntentions: 'I intend to be productive',
      dreams: 'I dream of being a successful entrepreneur',
      morningRoutine: 'I wake up, brush my teeth, and eat breakfast',
      tags: 'health, productivity, entrepreneurship',
      notes: 'I am feeling good today',
      user: user.id,
    },
  })
  console.log(dailyMorningPost)

  const dailyEveningPost = await db.dailyEveningPost.create({
    data: {
      date: new Date(),
      time: '22:00',
      productivity: 5,
      lessonsLearned: 'I learned how to use Prisma',
      mistakesMade: 'I made a mistake when I did not use Prisma',
      attitude: 5,
      positiveEvents: 'I had a great day',
      peopleMet: 'I met a new friend',
      tags: 'prisma, graphql, typescript',
      notes: 'I am feeling good today',
      user: user.id,
    },

  })
  console.log(dailyEveningPost)
}

