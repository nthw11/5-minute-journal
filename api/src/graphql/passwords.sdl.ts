export const schema = gql`
  type Password {
    id: Int!
    user: User!
    hashed: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    passwords: [Password!]! @requireAuth
    password(id: Int!): Password @requireAuth
  }

  input CreatePasswordInput {
    hashed: String!
  }

  input UpdatePasswordInput {
    hashed: String
  }

  type Mutation {
    createPassword(input: CreatePasswordInput!): Password! @requireAuth
    updatePassword(id: Int!, input: UpdatePasswordInput!): Password!
      @requireAuth
    deletePassword(id: Int!): Password! @requireAuth
  }
`
