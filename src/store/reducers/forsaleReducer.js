const initState = {
  forsale: {
    location: [
      {
        'Independence & Monmouth': [
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
        'Salem': [
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
        Dallas: [
          {
            id: 1,
            place: 'West Valley Taphouse',
          },
        ],
        Albany: [
          {
            id: 1,
            place: 'North Albany IGA',
          },
          {
            id: 2,
            place: 'Novak\'s Hungarian Restaurant',
          },
        ],
        McMinnville: [
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
        'Bella World Wines': {
          id: 1,
          place: 'Distributor for the Willamette Valley and Texas',
        },
        'Mulberry Trample Company': {
          id: 1,
          place: 'Wine Broker',
        },
      },
    ],
  },
};

// const initState = {
//   forsale: {
//     state: {
//       OR: {
//         city: [
//           {
//             Salem: [
//               {
//                 id: 1,
//                 name: 'Roth\'s',
//               },
//               {
//                 id: 2,
//                 name: 'Trader Joe\'s',
//               },
//               {
//                 id: 3,
//                 name: 'Sam\'s Super Store',
//               },
//               {
//                 id: 4,
//                 name: 'Darrel\'s Discount Diapers',
//               },
//             ],
//             Independence: [
//               {
//                 id: 1,
//                 name: 'The Valkyrie Wine Tavern',
//               },
//               {
//                 id: 2,
//                 name: 'Roth\'s',
//               },
//             ],
//             Portland: [
//               {
//                 id: 1,
//                 name: 'New Seasons',
//               },
//               {
//                 id: 2,
//                 name: 'World Foods',
//               },
//               {
//                 id: 3,
//                 name: 'A Wine Store',
//               },
//             ],
//           },
//         ],
//       },
//     },
//   },
// };

const forsaleReducer = (state = initState) => {
  return state;
}

export default forsaleReducer;
