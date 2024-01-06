export const schema = gql`
type Query {
  postsForDate(date: DateTime!): PostsForDateResult!
}

type PostsForDateResult {
  morningPost: [DailyMorningPost!]!
  eveningPost: [DailyEveningPost!]!
}

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
    createDailyMorningPost(
      input: CreateDailyMorningPostInput!
    ): DailyMorningPost! @requireAuth
    updateDailyMorningPost(
      id: Int!
      input: UpdateDailyMorningPostInput!
    ): DailyMorningPost! @requireAuth
    deleteDailyMorningPost(id: Int!): DailyMorningPost! @requireAuth
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
