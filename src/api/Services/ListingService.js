export class ListingService {
  constructor({
    db, // :Mongo.Collection<IListings>
    limit, // :number
  }) {
    this.db = db.rawCollection()
    this.collection = db
    this.limit = limit || null
  }

  async cities() {
    const { aggregation } = await import('./aggregation')
    const cities = await this.db.aggregate(aggregation(this.limit))
    return cities.map(({ id: [id], city }) => ({
      id,
      city,
    }))
  }

  listing(ast) {
    const query = this.collection.astToQuery(ast)
    return query.fetch()
  }
}
