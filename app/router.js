var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('users', function() {
    this.resource('user', { path:'/: user_id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });
});

export default Router;
