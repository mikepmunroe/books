var ReviewsNewController = Ember.Controller.extend({
  actions: {
    createReview: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('index');
      });
    }
  }
});

export default ReviewsNewController;