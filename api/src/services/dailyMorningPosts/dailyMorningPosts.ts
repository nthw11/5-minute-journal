import type {
  QueryResolvers,
  MutationResolvers,
  DailyMorningPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const dailyMorningPosts: QueryResolvers['dailyMorningPosts'] = () => {
  return db.dailyMorningPost.findMany()
}

export const dailyMorningPost: QueryResolvers['dailyMorningPost'] = ({
  id,
}) => {
  return db.dailyMorningPost.findUnique({
    where: { id },
  })
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
