export default {
  Query: {
    uniqueCities: async (...args) => {
      const [, ,
        {
          db: { listings },
          services: { listingService },
        },
      ] = args
      const { cities } = await listingService.cities(listings, { unique: true })
      return cities
    },
  },
}
