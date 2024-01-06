import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@test.test',
      name: 'Test',
      dailyEveningPosts: {
        create: {
          date: new Date(),
          time: 'Test',
          productivity: 5,
          lessonsLearned: 'Test',
          mistakesMade: 'Test',
          attitude: 5,
          positiveEvents: 'Test',
          peopleMet: 'Test',
          tags: 'Test, Test 2, Test 3',
          notes: 'Test',

        },
      },
      dailyMorningPosts: {
        create: {
          date: new Date(),
          time: 'Test',
          hoursSlept: 8,
          attitude: 5,
          gratitudePosts: 'test, test 2, test 3',
          dailyIntentions: 'Test',
          dreams: 'Test',
          morningRoutine: 'Test',
          tags: 'Test, Test 2, Test 3',
          notes: 'Test',

        },
      },

    },
  })
  console.log(user)
}
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
