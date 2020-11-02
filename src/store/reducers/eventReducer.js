/* eslint-disable quotes */
const initState = {
  // TODO: incorporate link to artist site if available
  events: {
    month: {
      october: [
        {
          id: 31,
          date: "31st",
          day: "Saturday",
          month: "October",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie Trio"'
        }
      ],
      november: [
        {
          id: 31,
          date: "3rd",
          day: "Tuesday",
          month: "November",
          start: "7pm",
          end: "11pm",
          title: "Election Watch Party"
        },
        {
          id: 30,
          date: "8th",
          day: "Sunday",
          month: "November",
          start: "2pm",
          end: "4pm",
          title: '"Orvil Ivie"'
        },
        {
          id: 26,
          date: "14th",
          day: "Saturday",
          month: "November",
          start: "6pm",
          end: "9pm",
          title: '"Rock \'n Roll Cowboys"'
        },
        {
          id: 29,
          date: "15th",
          day: "Sunday",
          month: "November",
          start: "1pm",
          end: "4pm",
          title: '"Rewind"'
        },
        {
          id: 25,
          date: "21st",
          day: "Saturday",
          month: "November",
          start: "6pm",
          end: "9pm",
          title: '"DRTR Blues Band"'
        },
        {
          id: 28,
          date: "22nd",
          day: "Sunday",
          month: "November",
          start: "2pm",
          end: "4pm",
          title: '"Orvil Ivie"'
        },
        {
          id: 24,
          date: "27th",
          day: "Friday",
          month: "November",
          start: "6pm",
          end: "9pm",
          title: '"Sig Paulson"'
        },
        {
          id: 27,
          date: "29th",
          day: "Sunday",
          month: "November",
          start: "2pm",
          end: "4pm",
          title: '"Orvil Ivie"'
        }
      ],
      december: [
        {
          id: 5,
          date: "5th",
          day: "Saturday",
          month: "December",
          start: "6pm",
          end: "9pm",
          title: '"DRTR Blues Band"'
        },
        {
          id: 6,
          date: "6th",
          day: "Sunday",
          month: "December",
          start: "1pm",
          end: "4pm",
          title: '"Wine Club Party"'
        },
        {
          id: 7,
          date: "6th",
          day: "Sunday",
          month: "December",
          start: "2pm",
          end: "4pm",
          title: '"Mitch Lies"'
        },
        {
          id: 12,
          date: "12th",
          day: "Saturday",
          month: "December",
          start: "6pm",
          end: "9pm",
          title: '"Rock \'n Roll Cowboys"'
        },
        {
          id: 13,
          date: "13th",
          day: "Sunday",
          month: "December",
          start: "2pm",
          end: "4pm",
          title: '"Mitch Lies"'
        },
        {
          id: 19,
          date: "19th",
          day: "Saturday",
          month: "December",
          start: "6pm",
          end: "9pm",
          title: '"Sig Paulson"'
        },
        {
          id: 20,
          date: "20th",
          day: "Sunday",
          month: "December",
          start: "2pm",
          end: "4pm",
          title: '"Mitch Lies"'
        },
        {
          id: 27,
          date: "27th",
          day: "Sunday",
          month: "December",
          start: "2pm",
          end: "4pm",
          title: '"Mitch Lies"'
        }
      ]
    }
  }
};

const eventReducer = (state = initState) => {
  // switch (action.type) {
  //   case 'CREATE_EVENT':
  //     console.log('created event', action.event);
  // }
  return state;
};

export default eventReducer;
