/* eslint-disable quotes */
const initState = {
  // TODO: incorporate link to artist site if available
  events: {
    month: {
      october: [
        {
          id: 3,
          date: '4th',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
        {
          id: 1,
          date: '9th',
          day: 'Friday',
          month: 'October',
          start: '6pm',
          end: '9pm',
          title: '"DRTR Blues"',
        },
        {
          id: 2,
          date: '10th',
          day: 'Saturday',
          month: 'October',
          start: '6pm',
          end: '9pm',
          title: '"Rewind"',
        },
        {
          id: 4,
          date: '11th',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
        {
          id: 5,
          date: '18th',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
        {
          id: 6,
          date: '25th',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
        {
          id: 30,
          date: '30th',
          day: 'Friday',
          month: 'October',
          start: '6pm',
          end: '9pm',
          title: '"Rewind Band"',
        },
        {
          id: 31,
          date: '31st',
          day: 'Saturday',
          month: 'October',
          start: '6pm',
          end: '9pm',
          title: '"Orvil Ivie Trio"',
        },
      ],
      november: [
        {
          id: 31,
          date: '3rd',
          day: 'Tuesday',
          month: 'November',
          start: '7pm',
          end: '11pm',
          title: 'Election Watch Party',
        },
        {
          id: 30,
          date: '8th',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
        {
          id: 29,
          date: '15th',
          day: 'Sunday',
          month: 'October',
          start: '1pm',
          end: '4pm',
          title: '"Rewind"',
        },
        {
          id: 28,
          date: '22nd',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
        {
          id: 27,
          date: '29th',
          day: 'Sunday',
          month: 'October',
          start: '2pm',
          end: '4pm',
          title: '"Orvil Ivie"',
        },
      ],
      december: [{}],
    },
  },
};

const eventReducer = (state = initState) => {
  // switch (action.type) {
  //   case 'CREATE_EVENT':
  //     console.log('created event', action.event);
  // }
  return state;
};

export default eventReducer;
