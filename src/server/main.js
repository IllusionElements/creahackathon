import '/src/db'
import '/src/graphql'
import { Meteor } from 'meteor/meteor'
import { initialize } from 'meteor/cultofcoders:apollo'
import { schemaDirectives } from '/src/graphql/directives'
import Listings from '/src/db/listings'

initialize({
  schemaDirectives,
  context: async () => {
    const { ListingService } = await import('/src/api/Services/ListingService')
    console.log(Meteor.settings)
    return {
      services: {
        listingService: new ListingService({
          db: Listings,
          limit: 800,
        }),
      },
      secrets: {
        localLogic: Meteor.settings.private.apikeys.localLogic,
      },
    }
  },
})
