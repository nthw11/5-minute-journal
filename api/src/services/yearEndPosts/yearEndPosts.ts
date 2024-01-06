import type {
  QueryResolvers,
  MutationResolvers,
  YearEndPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const yearEndPosts: QueryResolvers['yearEndPosts'] = () => {
  return db.yearEndPost.findMany()
}

export const yearEndPost: QueryResolvers['yearEndPost'] = ({ id }) => {
  return db.yearEndPost.findUnique({
    where: { id },
  })
}

export const createYearEndPost: MutationResolvers['createYearEndPost'] = ({
  input,
}) => {
  return db.yearEndPost.create({
    data: input,
  })
}

export const updateYearEndPost: MutationResolvers['updateYearEndPost'] = ({
  id,
  input,
}) => {
  return db.yearEndPost.update({
    data: input,
    where: { id },
  })
}

export const deleteYearEndPost: MutationResolvers['deleteYearEndPost'] = ({
  id,
}) => {
  return db.yearEndPost.delete({
    where: { id },
  })
}

export const YearEndPost: YearEndPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.yearEndPost.findUnique({ where: { id: root?.id } }).user()
  },
  goals: (_obj, { root }) => {
    return db.yearEndPost.findUnique({ where: { id: root?.id } }).goals()
  },
  events: (_obj, { root }) => {
    return db.yearEndPost.findUnique({ where: { id: root?.id } }).events()
  },
}
