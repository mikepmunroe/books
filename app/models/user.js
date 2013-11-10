App.User = DS.Model.extend({
  name         : DS.attr(),
  email        : DS.attr(),
  creationDate : DS.attr()
});

App.User.FIXTURES = [{
  id: 1,
  name: 'John David',
  email: 'john@david.com',
  creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
}