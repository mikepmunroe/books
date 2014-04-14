var Genre = DS.Model.extend({
  name: DS.attr(),
  books: DS.hasMany('book', { async: true })
});

Genre.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'Fiction'
  },
  {
    id: 2,
    name: 'Non Fiction',
    books: [1, 2]
  },
  {
    id: 3,
    name: 'Science Fiction'
  },
  {
    id: 4,
    name: 'Biography'
  }]
});

export default Genre;