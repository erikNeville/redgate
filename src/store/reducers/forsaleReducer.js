const initState = {
  forsale: {
    location: {
      independence: [
        {
          id: 1,
          place: 'Mangiare Italian Restaurant',
          city: 'Independence',
        },
        {
          id: 2,
          place: 'The Naughty Noodle Restaurant',
          city: 'Independence',
        },
        {
          id: 3,
          place: 'Valkyrie Wine Tavern',
          city: 'Independence',
        },
        {
          id: 4,
          place: 'Independence Grill and Fine Dining',
          city: 'Independence',
        },
        {
          id: 5,
          place: 'The Brew, Coffee and Spirits',
          city: 'Independence',
        },
      ],
      monmouth: [
        {
          id: 1,
          place: 'Roth\'s Fresh Market',
          city: 'Monmouth',
        },
        {
          id: 2,
          place: 'Rookie\'s Sports Bar',
          city: 'Monmouth',
        },
        {
          id: 3,
          place: 'The Grain Station Fine Dining',
          city: 'Monmouth',
        },
        {
          id: 4,
          place: 'Crush Wine Bar',
          city: 'Monmouth',
        },
      ],
      salem: [
        {
          id: 1,
          place: 'Roth\'s Fresh Markets',
          city: 'Salem',
        },
        {
          id: 2,
          place: 'Just Us Girls Wine Bar',
          city: 'Salem',
        },
        {
          id: 3,
          place: 'The Brew, Coffee and Spirits',
          city: 'Salem',
        },
        {
          id: 4,
          place: 'Robert\'s Store Fine Dining',
          city: 'Salem',
        },
      ],
      dallas: [
        {
          id: 1,
          place: 'West Valley Taphouse',
          city: 'Dallas',
        },
      ],
      albany: [
        {
          id: 1,
          place: 'North Albany IGA',
          city: 'Albany',
        },
        {
          id: 2,
          place: 'Novak\'s Hungarian Restaurant',
          city: 'Albany',
        },
      ],
      mcminnville: [
        {
          id: 1,
          place: 'Roth\'s Fresh Markets',
          city: 'McMinnville',
        },
        {
          id: 2,
          place: 'The Grain Station',
          city: 'McMinnville',
        },
        {
          id: 3,
          place: 'Pinot Vista Lounge Wine Bar',
          city: 'McMinnville',
        },
      ],
      other: [
        {
          id: 1,
          place: 'Bella World Wines',
          desc: 'Distributor for the Willamette Valley and Texas',
          city: 'Other',
        },
        {
          id: 2,
          place: 'Mulberry Trample Company',
          desc: 'Wine Broker',
          city: 'Other',
        },
      ],
    },
  },
};

const forsaleReducer = (state = initState) => {
  return state;
}

export default forsaleReducer;
