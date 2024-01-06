import type {
  FindQuarterlyQuery,
  FindQuarterlyQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindQuarterlyQuery($id: Int!) {
    quarterly: quarterly(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindQuarterlyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  quarterly,
}: CellSuccessProps<FindQuarterlyQuery, FindQuarterlyQueryVariables>) => {
  return <div>{JSON.stringify(quarterly)}</div>
}
