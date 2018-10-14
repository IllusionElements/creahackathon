import expect from 'jest'
import Listings from '/src/db/listings'
import { ListingService } from '/src/api/Services/ListingService'

// extracts the object's shape for jest's matcher funcs
const extractShape = o => Object.keys(o).reduce(
  (shape, key) => ({
    ...shape,
    [key]: typeof o[key],
  }),
  {},
)

describe('Listings Service', () => {
  const listingService = new ListingService({
    db: Listings,
    options: {
      testing: true,
      limit: 10,
    },
  })
  it('should return a list of cities', async () => {
    const { cities } = await listingService.cities()
    expect(cities.length).toBe(10)
    cities.forEach((city, i) => {
      console.info(`city ${i + 1}`)
      expect(extractShape(city)).toMatchObject({
        _id: 'string',
        city: 'string',
      })
    })
  })
})
