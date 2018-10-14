import { onPageLoad } from 'meteor/server-render'

onPageLoad(sink => sink.renderIntoElementById('server-render-target', `Server time: ${new Date()}`))
