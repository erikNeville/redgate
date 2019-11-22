const initState = {
  wines: {
    whites: [
      {
        id: 1,
        year: 2016,
        type: 'Chardonnay',
        title: 'Redgate Whites',
        price: 20.00,
        desc: 'Locally sourced and lightly oaked.',
      },
      {
        id: 2,
        year: 2015,
        type: 'White Pinot Noir',
        title: 'Redgate Whites',
        price: 28.00,
        desc: 'Fruity and light. White Pinot Moir is richer than many white wines because it’s made with red wine grapes. It has flavors of baked apple and pear, with zesty notes of honey, orange and ginger. Fermented in oak barrels rather than stainless tanks.',
      },
      {
        id: 2,
        year: 2018,
        type: 'Pinot Gris',
        title: 'Redgate Whites',
        price: 18.00,
        desc: 'Our award-winning Pinot Gris, planted in 2006 is our flagship wine. Fruit forward, refreshing, on the dry side. Flavors of green apple, pear and a hint of kiwi. Fantastic summer wine.',
      },
      {
        id: 3,
        year: 2018,
        type: 'Sweet Riesling',
        title: 'Redgate Whites',
        price: 20.00,
        desc: 'Sweet and well balanced.',
      },
      {
        id: 4,
        year: 2017,
        type: 'Rose\' of Pinot Noir',
        title: 'Redgate Whites',
        price: 20.00,
        desc: 'A silver medal winner at San Francisco Chronicle wine competition and is trending up in tastings.',
      },
    ],
    reds: [
      {
        id: 1,
        year: 2016,
        type: 'Estate Pinot Noir',
        title: 'Redgate Reds',
        price: 25.00,
        desc: 'Our award-winning Pinot Noir planted in 2006 is barrel aged for 12 months, mostly neutral barrels. Estate grown, single vineyard and unblended. Hints of blackberry and pepper.',
      },
      {
        id: 2,
        year: 2016,
        type: 'Merlot',
        title: 'Redgate Reds',
        price: null,
        desc: 'An Old Friend',
      },
      {
        id: 3,
        year: 2016,
        type: 'Ruby\'s Reserve',
        title: 'Redgate Reds',
        price: null,
        desc: 'Made with 20% Merlot and 80% Syrah.',
      },
      {
        id: 4,
        year: 2017,
        type: 'Tempranillo',
        title: 'Redgate Reds',
        price: 25.00,
        desc: 'Our Double Gold Winning Tempranillo is made from a Spanish grape with strong flavors of pepper and spice.',
      },
      {
        id: 5,
        year: 2016,
        type: 'Syrah',
        title: 'Redgate Reds',
        price: 35.00,
        desc: 'Made in our estate winery from Syrah grapes this wine is rich and bold.',
      },
      {
        id: 6,
        year: 2016,
        type: 'Cabernet Sauvignon',
        title: 'Redgate Reds',
        price: null,
        desc: '',
      },
      {
        id: 7,
        year: null,
        type: 'Dessert Wine',
        title: 'Redgate Reds',
        price: null,
        desc: '',
      },
    ],
  }
};

const wineReducer = (state = initState) => {
  return state;
};

export default wineReducer;
