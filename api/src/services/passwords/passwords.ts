import type {
  QueryResolvers,
  MutationResolvers,
  PasswordRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const passwords: QueryResolvers['passwords'] = () => {
  return db.password.findMany()
}

export const password: QueryResolvers['password'] = ({ id }) => {
  return db.password.findUnique({
    where: { id },
  })
}

export const createPassword: MutationResolvers['createPassword'] = ({
  input,
}) => {
  return db.password.create({
    data: input,
  })
}

export const updatePassword: MutationResolvers['updatePassword'] = ({
  id,
  input,
}) => {
  return db.password.update({
    data: input,
    where: { id },
  })
}

export const deletePassword: MutationResolvers['deletePassword'] = ({ id }) => {
  return db.password.delete({
    where: { id },
  })
}

export const Password: PasswordRelationResolvers = {
  user: (_obj, { root }) => {
    return db.password.findUnique({ where: { id: root?.id } }).user()
  },
}
