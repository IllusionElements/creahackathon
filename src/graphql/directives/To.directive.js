import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'apollo-server'

const INT = 'INT'
const FLOAT = 'FLOAT'

export class ToDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve: resolver = defaultFieldResolver } = field
    const { type } = this.args
    const resolve = async (...args) => {
      const result = await resolver.apply(this, ...args)
      if (Number.isNaN(Number(result)) || typeof result !== 'string') {
        return null
      }

      switch (type) {
        case INT:
          return Number.parseInt(result, 10)
        case FLOAT:
          return Number.parseFloat(result)
        default:
          return null
      }
    }

    Object.assign(field, {
      resolve,
    })
  }
}
