import type {
  QueryResolvers,
  MutationResolvers,
  DailyMorningPostRelationResolvers,
  DailyEveningPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const postsForDate = async ({ date }) => {
  // Format the date to ensure it matches the format stored in the database
  const formattedDate = new Date(date).toISOString().split('T')[0]

  const morningPost = await db.dailyMorningPost.findFirst({
    where: {
      date: formattedDate,
    },
  })

  const eveningPost = await db.dailyEveningPost.findFirst({
    where: {
      date: formattedDate,
    },
  })

  return {
    morningPost,
    eveningPost,
  }
}

export const createDailyMorningPost: MutationResolvers['createDailyMorningPost'] =
  ({ input }) => {
    return db.dailyMorningPost.create({
      data: input,
    })
  }

export const updateDailyMorningPost: MutationResolvers['updateDailyMorningPost'] =
  ({ id, input }) => {
    return db.dailyMorningPost.update({
      data: input,
      where: { id },
    })
  }

export const deleteDailyMorningPost: MutationResolvers['deleteDailyMorningPost'] =
  ({ id }) => {
    return db.dailyMorningPost.delete({
      where: { id },
    })
  }

export const DailyMorningPost: DailyMorningPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.dailyMorningPost.findUnique({ where: { id: root?.id } }).user()
  },
  goals: (_obj, { root }) => {
    return db.dailyMorningPost.findUnique({ where: { id: root?.id } }).goals()
  },
}


export const createDailyEveningPost: MutationResolvers['createDailyEveningPost'] =
  ({ input }) => {
    return db.dailyEveningPost.create({
      data: input,
    })
  }

export const updateDailyEveningPost: MutationResolvers['updateDailyEveningPost'] =
  ({ id, input }) => {
    return db.dailyEveningPost.update({
      data: input,
      where: { id },
    })
  }

export const deleteDailyEveningPost: MutationResolvers['deleteDailyEveningPost'] =
  ({ id }) => {
    return db.dailyEveningPost.delete({
      where: { id },
    })
  }

export const DailyEveningPost: DailyEveningPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.dailyEveningPost.findUnique({ where: { id: root?.id } }).user()
  },
  goals: (_obj, { root }) => {
    return db.dailyEveningPost.findUnique({ where: { id: root?.id } }).goals()
  },
  events: (_obj, { root }) => {
    return db.dailyEveningPost.findUnique({ where: { id: root?.id } }).events()
  },
}
