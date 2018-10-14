const DISABLE_FIELD = 0

const $group = {
  _id: {
    city: '$City',
  },
  cityId: {
    $push: '$_id',
  },
}

// eslint-disable-next-line no-underscore-dangle
const _id = DISABLE_FIELD
const id = '$cityId'
const cityId = DISABLE_FIELD
const city = '$_id.city'

const $project = {
  _id,
  id,
  cityId,
  city,
}

export const aggregation = $limit => [{ $group }, ($limit && { $limit }) || {}, { $project }]
