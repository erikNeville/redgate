const initState = {
  forsale: {
    location: {
      independence: [
        {
          id: 1,
          place: 'Roth\'s Fresh Market',
        },
        {
          id: 2,
          place: 'Rookie\'s Sports Bar',
        },
        {
          id: 3,
          place: 'The Grain Station Fine Dining',
        },
        {
          id: 4,
          place: 'Crush Wine Bar',
        },
        {
          id: 5,
          place: 'Mangiare Italian Restaurant',
        },
        {
          id: 6,
          place: 'The Naughty Noodle Restaurant',
        },
        {
          id: 7,
          place: 'Valkyrie Wine Tavern',
        },
        {
          id: 8,
          place: 'Independence Grill and Fine Dining',
        },
        {
          id: 9,
          place: 'The Brew, Coffee and Spirits',
        },
      ],
      salem: [
        {
          id: 1,
          place: 'Roth\'s Fresh Markets',
        },
        {
          id: 2,
          place: 'Just Us Girls Wine Bar',
        },
        {
          id: 3,
          place: 'The Brew, Coffee and Spirits',
        },
        {
          id: 4,
          place: 'Robert\'s Store Fine Dining',
        },
      ],
      dallas: [
        {
          id: 1,
          place: 'West Valley Taphouse',
        },
      ],
      albany: [
        {
          id: 1,
          place: 'North Albany IGA',
        },
        {
          id: 2,
          place: 'Novak\'s Hungarian Restaurant',
        },
      ],
      mcminnville: [
        {
          id: 1,
          place: 'Roth\'s Fresh Markets',
        },
        {
          id: 2,
          place: 'The Grain Station',
        },
        {
          id: 3,
          place: 'Pinot Vista Lounge Wine Bar',
        },
      ],
      other: [
        {
          id: 1,
          place: 'Bella World Wines',
          desc: 'Distributor for the Willamette Valley and Texas',
        },
        {
          id: 2,
          place: 'Mulberry Trample Company',
          desc: 'Wine Broker',
        },
      ],
    },
  },
};

const forsaleReducer = (state = initState) => {
  return state;
}

export default forsaleReducer;
