import type { FindGoalQuery, FindGoalQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindGoalQuery($id: Int!) {
    goal: goal(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindGoalQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  goal,
}: CellSuccessProps<FindGoalQuery, FindGoalQueryVariables>) => {
  return <div>{JSON.stringify(goal)}</div>
}
