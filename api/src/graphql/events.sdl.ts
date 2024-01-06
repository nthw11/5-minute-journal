export const schema = gql`
  type Event {
    id: Int!
    date: DateTime!
    time: String!
    title: String!
    description: String!
    tags: String!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
    DailyEveningPost: DailyEveningPost
    dailyEveningPostId: Int
    WeeklyPost: WeeklyPost
    weeklyPostId: Int
    QuarterlyPost: QuarterlyPost
    quarterlyPostId: Int
    YearEndPost: YearEndPost
    yearEndPostId: Int
    NewYearPost: NewYearPost
    newYearPostId: Int
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    date: DateTime!
    time: String!
    title: String!
    description: String!
    tags: String!
    notes: String
    dailyEveningPostId: Int
    weeklyPostId: Int
    quarterlyPostId: Int
    yearEndPostId: Int
    newYearPostId: Int
  }

  input UpdateEventInput {
    date: DateTime
    time: String
    title: String
    description: String
    tags: String
    notes: String
    dailyEveningPostId: Int
    weeklyPostId: Int
    quarterlyPostId: Int
    yearEndPostId: Int
    newYearPostId: Int
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
