export const schema = gql`
  type WeeklyPost {
    id: Int!
    user: User!
    date: DateTime!
    time: String!
    productivity: Int!
    goals: [Goal]!
    events: [Event]!
    tags: String!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    weeklyPosts: [WeeklyPost!]! @requireAuth
    weeklyPost(id: Int!): WeeklyPost @requireAuth
  }

  input CreateWeeklyPostInput {
    date: DateTime!
    time: String!
    productivity: Int!
    tags: String!
    notes: String
  }

  input UpdateWeeklyPostInput {
    date: DateTime
    time: String
    productivity: Int
    tags: String
    notes: String
  }

  type Mutation {
    createWeeklyPost(input: CreateWeeklyPostInput!): WeeklyPost! @requireAuth
    updateWeeklyPost(id: Int!, input: UpdateWeeklyPostInput!): WeeklyPost!
      @requireAuth
    deleteWeeklyPost(id: Int!): WeeklyPost! @requireAuth
  }
`
