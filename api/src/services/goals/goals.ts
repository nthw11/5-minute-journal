import type {
  QueryResolvers,
  MutationResolvers,
  GoalRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const goals: QueryResolvers['goals'] = () => {
  return db.goal.findMany()
}

export const goal: QueryResolvers['goal'] = ({ id }) => {
  return db.goal.findUnique({
    where: { id },
  })
}

export const createGoal: MutationResolvers['createGoal'] = ({ input }) => {
  return db.goal.create({
    data: input,
  })
}

export const updateGoal: MutationResolvers['updateGoal'] = ({ id, input }) => {
  return db.goal.update({
    data: input,
    where: { id },
  })
}

export const deleteGoal: MutationResolvers['deleteGoal'] = ({ id }) => {
  return db.goal.delete({
    where: { id },
  })
}

export const Goal: GoalRelationResolvers = {
  user: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).user()
  },
  WeeklyPost: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).WeeklyPost()
  },
  QuarterlyPost: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).QuarterlyPost()
  },
  YearEndPost: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).YearEndPost()
  },
  NewYearPost: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).NewYearPost()
  },
  DailyMorningPost: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).DailyMorningPost()
  },
  DailyEveningPost: (_obj, { root }) => {
    return db.goal.findUnique({ where: { id: root?.id } }).DailyEveningPost()
  },
}
