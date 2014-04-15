var ReviewsNewRoute = Ember.Route.extend({
  model: function() {
    this.store.createRecord('book');
  }
});

export default ReviewsNewRoute;