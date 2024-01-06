import type { DailyMorningPost, DailyEveningPost } from 'C:/Projects/5-minute-journal/api/types/graphql.d.ts';
import { type CellSuccessProps, type CellFailureProps, useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import { toast } from '@redwoodjs/web/toast'
import { Box, Text } from '@chakra-ui/react';

export const QUERY = gql`
  # query for DailyMorningPost and DailyEveningPost

  query FindDailyQuery($date: DateTime!) {
    # find dailyMorningPost and dailyEveningPost by date
    postsForDate(date: $date) {
      morningPost {
        id
        time
        hoursSlept
        attitude
        gratitudePosts
        dailyIntentions
        goals {
          id
          date
          priority
          status
          label
          tags
          notes
          createdAt
          updatedAt
        }
        dreams
        morningRoutine
        tags
        notes
        createdAt
        updatedAt
      }
      eveningPost {
        id
        time
        productivity
        lessonsLearned
        mistakesMade
        attitude
        positiveEvents
        peopleMet
        tags
        goals {
          id
          date
          priority
          status
          label
          tags
          notes
          createdAt
          updatedAt
        }
        events {
          id
          date
          time
          title
          description
          tags
          notes
          createdAt
          updatedAt
        }
        notes
        createdAt
        updatedAt
      }
      }
    }
  `
const CREATE_DAILY_MORNING_POST_MUTATION = gql`
  mutation CreateDailyMorningPostMutation($input: CreateDailyMorningPostInput!) {
    createDailyMorningPost(input: $input) {
      id
      date
      time
      hoursSlept
      attitude
      gratitudePosts
      dailyIntentions
      dreams
      morningRoutine
      tags
      notes
    }
  }
`

const CREATE_DAILY_EVENING_POST_MUTATION = gql`
  mutation CreateDailyEveningPostMutation($input: CreateDailyEveningPostInput!) {
    createDailyEveningPost(input: $input) {
      id
      date
      time
      productivity
      lessonsLearned
      mistakesMade
      attitude
      positiveEvents
      peopleMet
      tags
      notes
    }
  }
`

const UPDATE_DAILY_MORNING_POST_MUTATION = gql`
  mutation UpdateDailyMorningPostMutation($id: Int!, $input: UpdateDailyMorningPostInput!) {
    updateDailyMorningPost(id: $id, input: $input) {
      id
      date
      time
      hoursSlept
      attitude
      gratitudePosts
      dailyIntentions
      dreams
      morningRoutine
      tags
      notes
    }
  }
`

const UPDATE_DAILY_EVENING_POST_MUTATION = gql`
  mutation UpdateDailyEveningPostMutation($id: Int!, $input: UpdateDailyEveningPostInput!) {
    updateDailyEveningPost(id: $id, input: $input) {
      id
      date
      time
      productivity
      lessonsLearned
      mistakesMade
      attitude
      positiveEvents
      peopleMet
      tags
      notes
    }
  }
`

const DELETE_DAILY_MORNING_POST_MUTATION = gql`
  mutation DeleteDailyMorningPostMutation($id: Int!) {
    deleteDailyMorningPost(id: $id) {
      id
    }
  }
`

const DELETE_DAILY_EVENING_POST_MUTATION = gql`
  mutation DeleteDailyEveningPostMutation($id: Int!) {
    deleteDailyEveningPost(id: $id) {
      id
    }
  }
`



export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<unknown>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({}: CellSuccessProps<DailyMorningPost, DailyEveningPost>) => {
  // mutation to create a new dailyMorningPost
  const [
    createDailyMorningPost,
    {
      loading: createDailyMorningPostLoading,
      error: createDailyMorningPostError,
    },
  ] = useMutation(CREATE_DAILY_MORNING_POST_MUTATION, {
    onCompleted: () => {
      toast.success('DailyMorningPost created')
      navigate(routes.daily())
    },
  })

  // mutation to create a new dailyEveningPost
  const [
    createDailyEveningPost,
    {
      loading: createDailyEveningPostLoading,
      error: createDailyEveningPostError,
    },
  ] = useMutation(CREATE_DAILY_EVENING_POST_MUTATION, {
    onCompleted: () => {
      toast.success('DailyEveningPost created')
      navigate(routes.daily())
    },
  })

  // mutation to update a dailyMorningPost
  const [
    updateDailyMorningPost,
    {
      loading: updateDailyMorningPostLoading,
      error: updateDailyMorningPostError,
    },
  ] = useMutation(UPDATE_DAILY_MORNING_POST_MUTATION, {
    onCompleted: () => {
      toast.success('DailyMorningPost updated')
      navigate(routes.daily())
    },
  })

  // mutation to update a dailyEveningPost
  const [
    updateDailyEveningPost,
    {
      loading: updateDailyEveningPostLoading,
      error: updateDailyEveningPostError,
    },
  ] = useMutation(UPDATE_DAILY_EVENING_POST_MUTATION, {
    onCompleted: () => {
      toast.success('DailyEveningPost updated')
      navigate(routes.daily())
    },
  })

  // mutation to delete a dailyMorningPost
  const [
    deleteDailyMorningPost,
    {
      loading: deleteDailyMorningPostLoading,
      error: deleteDailyMorningPostError,
    },
  ] = useMutation(DELETE_DAILY_MORNING_POST_MUTATION, {
    onCompleted: () => {
      toast.success('DailyMorningPost deleted')
      navigate(routes.daily())
    },
  })

  // mutation to delete a dailyEveningPost
  const [
    deleteDailyEveningPost,
    {
      loading: deleteDailyEveningPostLoading,
      error: deleteDailyEveningPostError,
    },
  ] = useMutation(DELETE_DAILY_EVENING_POST_MUTATION, {
    onCompleted: () => {
      toast.success('DailyEveningPost deleted')
      navigate(routes.daily())
    },
  })

  return (
    <Box>
      <Text>Daily Cell</Text>
    </Box>
  )
}
