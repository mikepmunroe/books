var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.resource('book', { path: 'books/:book_id' });
  this.resource('genre', { path: 'genres/:genre_id' });
  this.resource('reviews', function() {
    this.route('new');
  });
});

export default Router;
