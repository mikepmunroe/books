var User = DS.Model.extend({
  name         : DS.attr(),
  email        : DS.attr(),
  creationDate : DS.attr()
});

export default User;

User.FIXTURES = ({
  id: 1,
  name: 'John David',
  email: 'john@david.com',
  creationDate: 'Sun, 10 Nov 2013 10:10:10 GMT'
});