import type { FindWeeklyQuery, FindWeeklyQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindWeeklyQuery($id: Int!) {
    weekly: weekly(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWeeklyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  weekly,
}: CellSuccessProps<FindWeeklyQuery, FindWeeklyQueryVariables>) => {
  return <div>{JSON.stringify(weekly)}</div>
}
