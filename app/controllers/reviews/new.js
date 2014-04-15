var ReviewsNewController = Ember.Controller.extend({
  actions: {
    createReview: function() {
      this.get('model').save();
    }
  }
});

export default ReviewsNewController;