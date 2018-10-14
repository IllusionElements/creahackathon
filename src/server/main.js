import { Meteor } from 'meteor/meteor'
import { onPageLoad } from 'meteor/server-render'
import { Mongo } from 'meteor/mongo'

const listing = new Mongo.Collection('listings')

Meteor.methods({
  distinct: async () => {
    console.log(await listing.rawCollection().distinct('City'))
    // return listing.rawDatabase()
  }
})
Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`)
})

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById(
    'server-render-target',
    `Server time: ${new Date()}`
  )
})
