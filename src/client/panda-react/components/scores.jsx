import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_SCORES = gql`
  type scoreQuery($listing: ID!) {
    scores(listingID: $listing) {
      statistics {
        averageAge
        median {
          INCOME: income
          DELTA: delta
        }
        lifestyle {
          category
          scoreRatio
        }
      }
    }
  }
`
