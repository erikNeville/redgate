const initState = {
  forsale:
  {
    state:
    [
      {
        OR:
        {
          city:
          [
            {
              Salem:
              [
                {
                  
                }
              ],
            },
          ],
        },
        WA:
        {
          city:
          [
            {

            },
          ],
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
