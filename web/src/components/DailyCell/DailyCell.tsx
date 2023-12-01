import type { FindDailyQuery, FindDailyQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindDailyQuery($id: Int!) {
    daily: daily(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDailyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  daily,
}: CellSuccessProps<FindDailyQuery, FindDailyQueryVariables>) => {
  return <div>{JSON.stringify(daily)}</div>
}
