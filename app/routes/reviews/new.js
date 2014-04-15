var ReviewsNewRoute = Ember.Route.extend({
  model: function(params) {
    this.store.createRecord('book');
  }
});

export default ReviewsNewRoute;