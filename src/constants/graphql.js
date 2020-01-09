import gql from 'graphql-tag'

export const ALL_MINIFIGS_QUERY = gql`
query minifigures {
  minifigures {
    characterName
    id
    minifigNumber
    yearReleased
    imageUrl
  }
}
`