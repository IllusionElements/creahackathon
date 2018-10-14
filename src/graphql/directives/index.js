import { load } from 'graphql-load'
import typeDefs from './directives.gql'
import { BitDirective } from './BitDirective.directive'
import { ToDirective } from './ToDIrective.directive'

load({
  typeDefs,
  schemaDirectives: {
    bit: BitDirective,
    to: ToDirective,
  },
})
