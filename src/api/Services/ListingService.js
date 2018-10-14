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
    const results = await this.db.aggregate(aggregation(this.limit)).toArray()
    const cities = results.map(({ id: [id], city }) => ({
      id: id.toString(),
      city,
    }))
    return {
      cities,
    }
  }

  listing(ast) {
    const query = this.collection.astToQuery(ast)
    return query.fetch()
  }
}
