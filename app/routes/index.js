export default Ember.Route.extend({
  model: function() {
    return [{
      id: 1,
      title: 'Flash Boys',
      author: 'Michael Lewis',
      review: 'Great coverage of HFT on Wall Street. Michael Lewis always writes hits.',
      rating: 5,
      amazon_id: '0393244660',
      url: 'http://www.amazon.com/Flash-Boys-Wall-Street-Revolt/dp/0393244660',
      image: ''
    },
    {
      id: 2,
      title: 'Getting to Yes: Negotiating Agreement Without Giving In',
      author: 'William Ury',
      review: 'On negotiating.',
      rating: 4,
      amazon_id: '0143118757',
      url: 'http://www.amazon.com/Getting-Yes-Negotiating-Agreement-Without/dp/0143118757/ref=sr_1_1?s=books&ie=UTF8&qid=1397143909&sr=1-1&keywords=Getting+to+Yes',
      image: ''
    }];
  }
});
