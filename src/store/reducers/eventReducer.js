const initState = {
  // TODO: incorporate link to artist site if available
  events: {
    month: {
      august: [
        {
          id: 1,
          date: '1st',
          day: 'Saturday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"The Dead Band"',
        },
        {
          id: 11,
          date: '2nd',
          day: 'Sunday',
          month: 'August',
          start: '1pm',
          end: '4pm',
          title: '"The Big Time"',
        },
        {
          id: 2,
          date: '7th',
          day: 'Friday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"Out of This World Band"',
        },
        {
          id: 3,
          date: '8th',
          day: 'Saturday',
          month: 'August',
          start: '8am',
          end: '9am',
          title: 'Tuna Canning',
        },
        {
          id: 16,
          date: '8th',
          day: 'Saturday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"Rock  \'n Roll Cowboys"',
        },
        {
          id: 4,
          date: '9th',
          day: 'Sunday',
          month: 'August',
          start: '2pm',
          end: '4pm',
          title: '"Mitch Lies"',
        },
        {
          id: 5,
          date: '14th',
          day: 'Friday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"Leanne McClellan Band"',
        },
        {
          id: 6,
          date: '15th',
          day: 'Saturday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"Ted Vaughn Blues Band"',
        },
        {
          id: 12,
          date: '16th',
          day: 'Sunday',
          month: 'August',
          start: '2pm',
          end: '4pm',
          title: '"Mitch Lies"',
        },
        {
          id: 13,
          date: '21st',
          day: 'Friday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"The Big Time"',
        },
        {
          id: 14,
          date: '22nd',
          day: 'Saturday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"Roundhouse"',
        },
        {
          id: 9,
          date: '28th',
          day: 'Friday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"DRTR Blues Band"',
        },
        {
          id: 10,
          date: '29th',
          day: 'Saturday',
          month: 'August',
          start: '6pm',
          end: '9pm',
          title: '"Orvil Ivie / Mike Renwick Duo"',
        },
        {
          id: 15,
          date: '30th',
          day: 'Sunday',
          month: 'August',
          start: '2pm',
          end: '4pm',
          title: '"Greg Ernst"',
        },
      ],
      september: [
        {
          id: 1,
          date: '4th',
          day: 'Friday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Roundhouse"',
        },
        {
          id: 2,
          date: '5th',
          day: 'Saturday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Ted Vaughn Blues Band"',
        },
        {
          id: 9,
          date: '6th',
          day: 'Sunday',
          month: 'September',
          start: '1pm',
          end: '4pm',
          title: '"Wine Club Party"',
        },
        {
          id: 3,
          date: '11th',
          day: 'Friday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Orvil Ivie Trio"',
        },
        {
          id: 4,
          date: '12th',
          day: 'Saturday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"The Dead Band"',
        },
        {
          id: 10,
          date: '13th',
          day: 'Sunday',
          month: 'September',
          start: '2pm',
          end: '4pm',
          title: '"Steve Yant"',
        },
        {
          id: 11,
          date: '18th',
          day: 'Friday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"DRTR Blues"',
        },
        {
          id: 6,
          date: '19th',
          day: 'Saturday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Ted Vaughn Blues Band"',
        },
        {
          id: 7,
          date: '20th',
          day: 'Sunday',
          month: 'September',
          start: '2pm',
          end: '4pm',
          title: '"Mitch Lies"',
        },
        {
          id: 12,
          date: '25th',
          day: 'Friday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Rewind"',
        },
        {
          id: 8,
          date: '26th',
          day: 'Saturday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Out of This World Band"',
        },
        {
          id: 13,
          date: '27th',
          day: 'Sunday',
          month: 'September',
          start: '6pm',
          end: '9pm',
          title: '"Greg Ernst"',
        },
      ],
      october: [
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
    },
  },
};

const eventReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case 'CREATE_EVENT':
  //     console.log('created event', action.event);
  // }
  return state;
};

export default eventReducer;
