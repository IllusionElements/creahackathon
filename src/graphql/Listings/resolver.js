import { load } from 'graphql-load'
import Query from './Query.gql'
import Schema from './Schema.gql'

const typeDefs = [Query, Schema]
const resolvers = {
  Query: {
    uniqueCities: async (...args) => {
      const [, ,

        {
          db: { listings },
          services: { listingService },
        },
      ] = args
      const { cities } = await listingService.cities(listings, { unique: true })
      console.log(typeof cities[0].id)
      return cities
    },
  },
}

load({
  typeDefs,
  resolvers,
})
