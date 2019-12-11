const initState = {
  events: {
    month: {
      december: [
        {
          id: 20,
          date: '13th',
          day: 'Friday',
          month: 'December',
          start: '6pm',
          end: '9pm',
          title: '"Midnight Pass" - Steve\'s Birthday Party!',
        },
        {
          id: 21,
          date: '14th',
          day: 'Saturday',
          month: 'December',
          start: '6pm',
          end: '9pm',
          title: '"Orvil Ivie Trio" - Smooth Jazz',
        },
        {
          id: 22,
          date: '14th',
          day: 'Saturday',
          month: 'December',
          start: '2pm',
          end: '7pm',
          title:
            '"Spitit Mountain Annual Holiday Wine & Spirits Fair" - We will be at the 2019 ANNUAL HOLIDAY WINE & SPIRITS FAIR at Spirit Mountain Casino. Public event is from 2 – 7 PM in the Event Center with live entertainment. Admission is free. Vendors will consist of Oregon wineries, distillers, brewers, gourmet food, artist, lifestyle & craft.',
        },
        {
          id: 23,
          date: '15th',
          day: 'Sunday',
          month: 'December',
          end: 'Closed to public.',
          title: 'Closed to public for private event.',
        },
        {
          id: 24,
          date: '20th',
          day: 'Friday',
          month: 'December',
          start: '6pm',
          end: '9pm',
          title: '"Ted Vaughn" - Blues Band',
        },
        {
          id: 25,
          date: '21st',
          day: 'Saturday',
          month: 'December',
          start: '6pm',
          end: '9pm',
          title: '"Dead Band" - Grateful Dead',
        },
        {
          id: 26,
          date: '22nd',
          day: 'Sunday',
          month: 'December',
          start: '2pm',
          end: '4pm',
          title: '"Mitch Lies" - Solo Guitar, Vocals',
        },
        {
          id: 27,
          date: '28th',
          day: 'Saturday',
          month: 'December',
          start: '2pm',
          end: '4pm',
          title: '"Round House" - Bluegrass',
        },
      ],
      january: [
        {
          id: 1,
          date: '5th',
          day: 'Sunday',
          month: 'January',
          start: '2pm',
          end: '4pm',
          title: '"Mitch Lies" - Solo Guitar, Vocals',
        },
        {
          id: 2,
          date: '12th',
          day: 'Sunday',
          month: 'January',
          start: '2pm',
          end: '4pm',
          title: '“Ronnie Kay & Uncle Rey”',
        },
        {
          id: 3,
          date: '10th',
          day: 'Friday',
          month: 'January',
          start: '6pm',
          end: '9pm',
          title: '“The Dead Band”',
        },
        {
          id: 4,
          date: '29th',
          day: 'Wednesday',
          month: 'January',
          start: '2pm',
          end: '4pm',
          title: '"Ronnie Kay & Uncle Rey"',
        },
      ],
      february: [
        {
          id: 1,
          date: '8th',
          day: 'Saturday',
          month: 'February',
          start: '6pm',
          end: '9pm',
          title: '"The Dead Band"',
        },
        {
          id: 2,
          date: '14th',
          day: 'Friday',
          month: 'February',
          start: '6pm',
          end: '9pm',
          title: '"Ted Vaughn Blues Band"',
        },
      ],
      march: [
        {
          id: 1,
          date: '8th',
          day: 'Sunday',
          month: 'March',
          start: '12pm',
          end: '5pm',
          title: 'Redgate Wine Club Pickup Party',
        },
        {
          id: 2,
          date: '13th',
          day: 'Friday',
          month: 'March',
          start: '6pm',
          end: '9pm',
          title: '"Ted Vaughn Blues Band"',
        },
      ],
      april: [
        {
          id: 1,
          date: '11th',
          day: 'Saturday',
          month: 'April',
          start: '6pm',
          end: '9pm',
          title: '"Iron Butterfly\'s" Martin Gerschwitz',
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
