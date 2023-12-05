import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  password: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).password()
  },
  profile: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).profile()
  },
  dailyMorningPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).dailyMorningPosts()
  },
  dailyEveningPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).dailyEveningPosts()
  },
  weeklyPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).weeklyPosts()
  },
  yearEndPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).yearEndPosts()
  },
  newYearPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).newYearPosts()
  },
  quarterlyPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).quarterlyPosts()
  },
  Goal: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Goal()
  },
}
