var Book = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  review: DS.attr(),
  rating: DS.attr('number'),
  amazon_id: DS.attr(),
  url: DS.attr(),
  image: DS.attr()
});

Book.reopenClass({
  FIXTURES: [{
      id: 1,
      title: 'Flash Boys',
      author: 'Michael Lewis',
      review: 'Great coverage of HFT on Wall Street. Michael Lewis always writes hits.',
      rating: 5,
      amazon_id: '0393244660',
      url: 'http://www.amazon.com/Flash-Boys-Wall-Street-Revolt/dp/0393244660',
      image: 'http://ecx.images-amazon.com/images/I/41rC-xFW03L._SL160_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU01_AA160_.jpg'
    },
    {
      id: 2,
      title: 'Getting to Yes: Negotiating Agreement Without Giving In',
      author: 'Roger Fisher, William L. Ury and Bruce Patton',
      review: 'On negotiating.',
      rating: 4,
      amazon_id: '0143118757',
      url: 'http://www.amazon.com/Getting-Yes-Negotiating-Agreement-Without/dp/0143118757/ref=sr_1_1?s=books&ie=UTF8&qid=1397143909&sr=1-1&keywords=Getting+to+Yes',
      image: 'http://ecx.images-amazon.com/images/I/51QyhsSam0L._AA160_.jpg'
    }]
});

export default Book;