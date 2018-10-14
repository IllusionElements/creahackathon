import './Location/Scores/resolver'
import './Listings/resolver'
import { load } from 'graphql-load'
import typeDefs from './interface.gql'

load({ typeDefs })

// export * from ''
