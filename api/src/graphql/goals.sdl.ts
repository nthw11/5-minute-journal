export const schema = gql`
  type Goal {
    id: Int!
    user: User!
    date: DateTime!
    priority: Int!
    status: Int!
    label: String!
    tags: String!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
    WeeklyPost: WeeklyPost
    weeklyPostId: Int
    QuarterlyPost: QuarterlyPost
    quarterlyPostId: Int
    YearEndPost: YearEndPost
    yearEndPostId: Int
    NewYearPost: NewYearPost
    newYearPostId: Int
    DailyMorningPost: DailyMorningPost
    dailyMorningPostId: Int
    DailyEveningPost: DailyEveningPost
    dailyEveningPostId: Int
  }

  type Query {
    goals: [Goal!]! @requireAuth
    goal(id: Int!): Goal @requireAuth
  }

  input CreateGoalInput {
    date: DateTime!
    priority: Int!
    status: Int!
    label: String!
    tags: String!
    notes: String
    weeklyPostId: Int
    quarterlyPostId: Int
    yearEndPostId: Int
    newYearPostId: Int
    dailyMorningPostId: Int
    dailyEveningPostId: Int
  }

  input UpdateGoalInput {
    date: DateTime
    priority: Int
    status: Int
    label: String
    tags: String
    notes: String
    weeklyPostId: Int
    quarterlyPostId: Int
    yearEndPostId: Int
    newYearPostId: Int
    dailyMorningPostId: Int
    dailyEveningPostId: Int
  }

  type Mutation {
    createGoal(input: CreateGoalInput!): Goal! @requireAuth
    updateGoal(id: Int!, input: UpdateGoalInput!): Goal! @requireAuth
    deleteGoal(id: Int!): Goal! @requireAuth
  }
`
