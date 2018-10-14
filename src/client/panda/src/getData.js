export const getCities = async () => {
  const query = `query getCityList {
    uniqueCities {
      _id
      city
    }
  }
  ` // / array ~ 800 cities
  const result = await window.fetch(`http://localhost:3000/graphql?query=${query}`)
  return result.json()
}

/**
 * data format:
 *  type Data = {
    bedrooms: 1-5,
    bathrooms: 1-5,
    pool: Boolean,
    leisure: { cafe: Boolean, park: Boolean },
    transportation: { transit: Boolean, car: Boolean, pedestrian: Boolean },
    kids: Boolean,
  }
 *  */

export const sendQuestionAnswers = (data) => {
  const variables = JSON.stringify(data)
  const query = `
    query answers($results: Questions!) {
      _id
      Address
      City
      Image
      Latitude: lat
      Longitude: long
      scores {
        statistics {
          averageAge
          median {
            INCOME: income
            DELTA: delta
          }
          lifestyle {
            category
            scoreRatio
          }
        }
      }
    }
  `
  return {
    type: 'POST',
    url: 'http://localhost:3000/graphql',
    body: JSON.stringify({
      query,
      variables,
    }),
    contentType: 'application/json',
  }
}
/**
 *
 * variables: {
 *  long: Integer,
 *  lat: Integer
 * }
 */
export const LocalLogic = (variables) => {
  const query = `
    query localLogic($long: Int!, $lat: Int!) {
      locallogic(x: $long, y: $lat) {
        type
        attributes
        link
      }
    }
  `
  return {
    format: {
      type: 'POST',
      url: 'http://localhost:3000/graphql',
      body: JSON.stringify({
        query,
        variables,
      }),
      contentType: 'application/json',
    },
    next: link => window.fetch(link),
  }
}
