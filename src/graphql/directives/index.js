import { load } from 'graphql-load'
import typeDefs from './directives.gql'
import { BitDirective as bit } from './Bit.directive'
import { ToDirective as to } from './To.directive'

load({
  typeDefs,
})

export const schemaDirectives = { to, bit }
