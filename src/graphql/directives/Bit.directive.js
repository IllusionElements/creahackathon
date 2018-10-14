import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

export class BitDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve: resolver = defaultFieldResolver } = field
    const resolve = async (...args) => {
      const result = await resolver.apply(this, ...args)
      if (typeof result === 'string' && (result === '1' || result === '0')) {
        return Boolean(result)
      }
      return result
    }

    Object.assign(field, {
      resolve,
    })
  }
}
