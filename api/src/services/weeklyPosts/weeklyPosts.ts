import type {
  QueryResolvers,
  MutationResolvers,
  WeeklyPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const weeklyPosts: QueryResolvers['weeklyPosts'] = () => {
  return db.weeklyPost.findMany()
}

export const weeklyPost: QueryResolvers['weeklyPost'] = ({ id }) => {
  return db.weeklyPost.findUnique({
    where: { id },
  })
}

export const createWeeklyPost: MutationResolvers['createWeeklyPost'] = ({
  input,
}) => {
  return db.weeklyPost.create({
    data: input,
  })
}

export const updateWeeklyPost: MutationResolvers['updateWeeklyPost'] = ({
  id,
  input,
}) => {
  return db.weeklyPost.update({
    data: input,
    where: { id },
  })
}

export const deleteWeeklyPost: MutationResolvers['deleteWeeklyPost'] = ({
  id,
}) => {
  return db.weeklyPost.delete({
    where: { id },
  })
}

export const WeeklyPost: WeeklyPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.weeklyPost.findUnique({ where: { id: root?.id } }).user()
  },
  goals: (_obj, { root }) => {
    return db.weeklyPost.findUnique({ where: { id: root?.id } }).goals()
  },
  events: (_obj, { root }) => {
    return db.weeklyPost.findUnique({ where: { id: root?.id } }).events()
  },
}
