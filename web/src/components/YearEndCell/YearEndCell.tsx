import type { FindYearEndQuery, FindYearEndQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindYearEndQuery($id: Int!) {
    yearEnd: yearEnd(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindYearEndQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  yearEnd,
}: CellSuccessProps<FindYearEndQuery, FindYearEndQueryVariables>) => {
  return <div>{JSON.stringify(yearEnd)}</div>
}
