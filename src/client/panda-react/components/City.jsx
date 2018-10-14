import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Inputs from '../vue-components/HelloWorld.vue'

export const CITY = gql`
  query getCityList {
    uniqueCities {
      _id
      city
    }
  }
`

export const Cities = () => (
  <Query query={CITY}>
    {({ loading, data }) => {
      if (loading) return <h1>...Loading</h1>
      return <Inputs cities={data} />
    }}
  </Query>
)
