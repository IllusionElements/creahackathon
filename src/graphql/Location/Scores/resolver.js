import { load } from 'graphql-load'
import typeDefs from './schema.gql'

load({
  typeDefs,
  resolvers: {
    Score: {},
  },
})
