import React from 'react'
import p from 'immer'
import gql from 'graphql-tag'
import { Select } from '@material-ui/core'

const createQuestion = (question, options, optional) => ({
  question,
  options,
  optional,
})

const qs = [
  ['How many bedrooms do you need?', [1, 2, 3, 4, 5], false],
  ['How many bathrooms do you need?', [1, 2, 3, 4, 5], true],
  ['Do you want a Pool?', [1, 0], false],
  ['Do you prefer a stroll down the street or to a park?', ['Street', 'Park'], true],
  ['Do you have children?', ['Yes', 'No'], true],
  ['How do you get around?', ['Public Transit', 'Drive', 'Walk'], true],
]

const questions = qs.map(q => createQuestion(...q))

const LEISURE = 'leisure'
const TRANSPORTATION = 'transportation'
const syncIterator = n => n[Symbol.iterator]()

export class Questions extends React.Component {
  state = {
    questions: [],
    bedrooms: 0,
    bathrooms: 0,
    pool: 0,
    leisure: { cafe: null, park: null },
    transportation: { transit: null, car: null, pedestrian: null },
    kids: 0,
  }

  produceState = f => this.setState(p(f))

  onChange = type => (e) => {
    const { value } = e.target
    switch (type) {
      case LEISURE:
        {
          const callback = (cafe, park) => {
            this.produceState((draft) => {
              // eslint-disable-next-line
              draft.leisure = {
                cafe,
                park,
              }
            })
          }
          if (value === 'cafe') {
            callback(true, false)
          } else {
            callback(!!0, !!1)
          }
        }
        break
      case TRANSPORTATION:
        this.produceState((draft) => {
          // eslint-disable-next-line
          draft.transportation[value] = true
        })

        break
      default:
        this.setState({
          [type]: value,
        })
    }
  }

  render() {
    const { onChange } = this
    const questionIterator = syncIterator(questions)
    const questionList = questionIterator.next()
    return <h1 />
  }
}
