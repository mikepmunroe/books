var User = DS.Model.extend({
  name         : DS.attr('string'),
  email        : DS.attr('string'),
  creationDate : DS.attr('date')
});

User.reopenClass({
  FIXTURES: [
  {
    id: "1",
    name: 'John David',
    email: 'john@david.com',
    creationDate: 'Sun, 10 Nov 2013 10:10:10 GMT'
  }
]});

export default User;