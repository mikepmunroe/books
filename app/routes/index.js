export default Ember.Route.extend({
  model: function() {
    return [{
      id: 1,
      title: 'Flash Boys',
      author: 'Michael Lewis',
      review: 'Great coverage of HFT on Wall Street. Michael Lewis always writes hits.'
    }];
  }
});
