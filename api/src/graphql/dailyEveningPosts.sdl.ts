export const schema = gql`
  type DailyEveningPost {
    id: Int!
    user: User!
    date: DateTime!
    time: String!
    productivity: Int!
    lessonsLearned: String!
    mistakesMade: String!
    attitude: Int!
    positiveEvents: String!
    peopleMet: String!
    tags: String!
    goals: [Goal]!
    events: [Event]!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    dailyEveningPosts: [DailyEveningPost!]! @requireAuth
    dailyEveningPost(id: Int!): DailyEveningPost @requireAuth
  }

  input CreateDailyEveningPostInput {
    date: DateTime!
    time: String!
    productivity: Int!
    lessonsLearned: String!
    mistakesMade: String!
    attitude: Int!
    positiveEvents: String!
    peopleMet: String!
    tags: String!
    notes: String
  }

  input UpdateDailyEveningPostInput {
    date: DateTime
    time: String
    productivity: Int
    lessonsLearned: String
    mistakesMade: String
    attitude: Int
    positiveEvents: String
    peopleMet: String
    tags: String
    notes: String
  }

  type Mutation {
    createDailyEveningPost(
      input: CreateDailyEveningPostInput!
    ): DailyEveningPost! @requireAuth
    updateDailyEveningPost(
      id: Int!
      input: UpdateDailyEveningPostInput!
    ): DailyEveningPost! @requireAuth
    deleteDailyEveningPost(id: Int!): DailyEveningPost! @requireAuth
  }
`
