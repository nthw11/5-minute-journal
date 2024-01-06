export const schema = gql`
  type QuarterlyPost {
    id: Int!
    user: User!
    date: DateTime!
    time: String!
    tags: String!
    goals: [Goal]!
    events: [Event]!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    quarterlyPosts: [QuarterlyPost!]! @requireAuth
    quarterlyPost(id: Int!): QuarterlyPost @requireAuth
  }

  input CreateQuarterlyPostInput {
    date: DateTime!
    time: String!
    tags: String!
    notes: String
  }

  input UpdateQuarterlyPostInput {
    date: DateTime
    time: String
    tags: String
    notes: String
  }

  type Mutation {
    createQuarterlyPost(input: CreateQuarterlyPostInput!): QuarterlyPost!
      @requireAuth
    updateQuarterlyPost(
      id: Int!
      input: UpdateQuarterlyPostInput!
    ): QuarterlyPost! @requireAuth
    deleteQuarterlyPost(id: Int!): QuarterlyPost! @requireAuth
  }
`
