import gql from 'graphql-tag'

export const ALL_BOOKS_QUERY = gql`
  query minfigures {
    books {
        id
        author
        name
    }
  }
`