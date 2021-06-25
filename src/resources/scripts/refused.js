export class Refused {
  filters = []
  blocker = null

  constructor() {
  }

  /**
   * @param  {class} blocker 
   */
  set blocker(blocker) {
    this.blocker = blocker
  }

  /**
   * @param  {array} filters 
   */
  set filters(filters) {
    this.filters = filters
  }

  run() {
    if(!this.blocker) {
      throw new Error("Blocker is not set up")
    }

    if(!this.filters.length > 0) {
      throw new Error("No filter found")
    }

    // Initiate Blocker class
    // it will start blocking urls by its own handler
    const blocker = new this.blocker().block_urls(this.filters)
  }

}