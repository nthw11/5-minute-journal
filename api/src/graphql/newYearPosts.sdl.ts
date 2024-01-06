export const schema = gql`
  type NewYearPost {
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
    newYearPosts: [NewYearPost!]! @requireAuth
    newYearPost(id: Int!): NewYearPost @requireAuth
  }

  input CreateNewYearPostInput {
    date: DateTime!
    time: String!
    tags: String!
    notes: String
  }

  input UpdateNewYearPostInput {
    date: DateTime
    time: String
    tags: String
    notes: String
  }

  type Mutation {
    createNewYearPost(input: CreateNewYearPostInput!): NewYearPost! @requireAuth
    updateNewYearPost(id: Int!, input: UpdateNewYearPostInput!): NewYearPost!
      @requireAuth
    deleteNewYearPost(id: Int!): NewYearPost! @requireAuth
  }
`
