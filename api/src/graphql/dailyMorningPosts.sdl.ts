export const schema = gql`
  type DailyMorningPost {
    id: Int!
    user: User!
    date: DateTime!
    time: String!
    hoursSlept: Int!
    attitude: Int!
    gratitudePosts: String!
    dailyIntentions: String!
    goals: [Goal]!
    dreams: String!
    morningRoutine: String!
    tags: String!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    dailyMorningPosts: [DailyMorningPost!]! @requireAuth
    dailyMorningPost(id: Int!): DailyMorningPost @requireAuth
  }

  input CreateDailyMorningPostInput {
    date: DateTime!
    time: String!
    hoursSlept: Int!
    attitude: Int!
    gratitudePosts: String!
    dailyIntentions: String!
    dreams: String!
    morningRoutine: String!
    tags: String!
    notes: String
  }

  input UpdateDailyMorningPostInput {
    date: DateTime
    time: String
    hoursSlept: Int
    attitude: Int
    gratitudePosts: String
    dailyIntentions: String
    dreams: String
    morningRoutine: String
    tags: String
    notes: String
  }

  type Mutation {
    createDailyMorningPost(
      input: CreateDailyMorningPostInput!
    ): DailyMorningPost! @requireAuth
    updateDailyMorningPost(
      id: Int!
      input: UpdateDailyMorningPostInput!
    ): DailyMorningPost! @requireAuth
    deleteDailyMorningPost(id: Int!): DailyMorningPost! @requireAuth
  }
`
