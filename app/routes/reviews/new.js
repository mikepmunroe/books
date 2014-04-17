var ReviewsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('book');
  }
});

export default ReviewsNewRoute;