import type {
  QueryResolvers,
  MutationResolvers,
  DailyEveningPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const dailyEveningPosts: QueryResolvers['dailyEveningPosts'] = () => {
  return db.dailyEveningPost.findMany()
}

export const dailyEveningPost: QueryResolvers['dailyEveningPost'] = ({
  id,
}) => {
  return db.dailyEveningPost.findUnique({
    where: { id },
  })
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
