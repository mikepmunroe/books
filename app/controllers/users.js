var UsersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true // false = descending
});

export default UsersController;