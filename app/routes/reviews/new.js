var ReviewsNewRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      book: this.store.createRecord('book'),
      genres: this.store.findAll('genre')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model.book);
    controller.set('genres', model.genres);
  },
  actions: {
    willTransition: function(transition) {
      if(this.currentModel.book.get('isNew')) {
        if(confirm("Are you sure you want to leave the page without saving your changes?")) {
          this.currentModel.book.destroyRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});

export default ReviewsNewRoute;