export const schema = gql`
  type YearEndPost {
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
    yearEndPosts: [YearEndPost!]! @requireAuth
    yearEndPost(id: Int!): YearEndPost @requireAuth
  }

  input CreateYearEndPostInput {
    date: DateTime!
    time: String!
    tags: String!
    notes: String
  }

  input UpdateYearEndPostInput {
    date: DateTime
    time: String
    tags: String
    notes: String
  }

  type Mutation {
    createYearEndPost(input: CreateYearEndPostInput!): YearEndPost! @requireAuth
    updateYearEndPost(id: Int!, input: UpdateYearEndPostInput!): YearEndPost!
      @requireAuth
    deleteYearEndPost(id: Int!): YearEndPost! @requireAuth
  }
`
