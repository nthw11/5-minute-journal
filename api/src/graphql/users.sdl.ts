export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: Password
    profile: Profile
    createdAt: DateTime!
    updatedAt: DateTime!
    dailyMorningPosts: [DailyMorningPost]!
    dailyEveningPosts: [DailyEveningPost]!
    weeklyPosts: [WeeklyPost]!
    yearEndPosts: [YearEndPost]!
    newYearPosts: [NewYearPost]!
    quarterlyPosts: [QuarterlyPost]!
    Goal: [Goal]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
