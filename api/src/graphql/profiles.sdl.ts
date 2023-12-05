export const schema = gql`
  type Profile {
    id: Int!
    user: User!
    picture: String!
    firstName: String!
    lastName: String!
    bio: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    picture: String!
    firstName: String!
    lastName: String!
    bio: String!
  }

  input UpdateProfileInput {
    picture: String
    firstName: String
    lastName: String
    bio: String
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
