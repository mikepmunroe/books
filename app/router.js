var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('users', function() {
    this.route('new');
  });
});

export default Router;
