import type {
  QueryResolvers,
  MutationResolvers,
  NewYearPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const newYearPosts: QueryResolvers['newYearPosts'] = () => {
  return db.newYearPost.findMany()
}

export const newYearPost: QueryResolvers['newYearPost'] = ({ id }) => {
  return db.newYearPost.findUnique({
    where: { id },
  })
}

export const createNewYearPost: MutationResolvers['createNewYearPost'] = ({
  input,
}) => {
  return db.newYearPost.create({
    data: input,
  })
}

export const updateNewYearPost: MutationResolvers['updateNewYearPost'] = ({
  id,
  input,
}) => {
  return db.newYearPost.update({
    data: input,
    where: { id },
  })
}

export const deleteNewYearPost: MutationResolvers['deleteNewYearPost'] = ({
  id,
}) => {
  return db.newYearPost.delete({
    where: { id },
  })
}

export const NewYearPost: NewYearPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.newYearPost.findUnique({ where: { id: root?.id } }).user()
  },
  goals: (_obj, { root }) => {
    return db.newYearPost.findUnique({ where: { id: root?.id } }).goals()
  },
  events: (_obj, { root }) => {
    return db.newYearPost.findUnique({ where: { id: root?.id } }).events()
  },
}
