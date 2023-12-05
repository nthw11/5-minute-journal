import type {
  QueryResolvers,
  MutationResolvers,
  QuarterlyPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const quarterlyPosts: QueryResolvers['quarterlyPosts'] = () => {
  return db.quarterlyPost.findMany()
}

export const quarterlyPost: QueryResolvers['quarterlyPost'] = ({ id }) => {
  return db.quarterlyPost.findUnique({
    where: { id },
  })
}

export const createQuarterlyPost: MutationResolvers['createQuarterlyPost'] = ({
  input,
}) => {
  return db.quarterlyPost.create({
    data: input,
  })
}

export const updateQuarterlyPost: MutationResolvers['updateQuarterlyPost'] = ({
  id,
  input,
}) => {
  return db.quarterlyPost.update({
    data: input,
    where: { id },
  })
}

export const deleteQuarterlyPost: MutationResolvers['deleteQuarterlyPost'] = ({
  id,
}) => {
  return db.quarterlyPost.delete({
    where: { id },
  })
}

export const QuarterlyPost: QuarterlyPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.quarterlyPost.findUnique({ where: { id: root?.id } }).user()
  },
  goals: (_obj, { root }) => {
    return db.quarterlyPost.findUnique({ where: { id: root?.id } }).goals()
  },
  events: (_obj, { root }) => {
    return db.quarterlyPost.findUnique({ where: { id: root?.id } }).events()
  },
}
