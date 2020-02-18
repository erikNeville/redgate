const initState = {
  // TODO: incorporate link to artist site if available
  events: {
    month: {
      february: [
        {
          id: 6,
          date: "14th",
          day: "Friday",
          month: "February",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 7,
          date: "16th",
          day: "Sunday",
          month: "February",
          start: "2pm",
          end: "4pm",
          title: '"Mitch Lies"'
        },
        {
          id: 8,
          date: "21st",
          day: "Friday",
          month: "February",
          start: "6pm",
          end: "9pm",
          title: '"Rock \'n Roll Cowboys"'
        },
        {
          id: 9,
          date: "22nd",
          day: "Saturday",
          month: "February",
          start: "6pm",
          end: "9pm",
          title: '"Leanne McClellan Band" - Ladies get in free!'
        },
        {
          id: 10,
          date: "23rd",
          day: "Sunday",
          month: "February",
          start: "2pm",
          end: "4pm",
          title: '"Orvil Ivie"'
        },
        {
          id: 11,
          date: "28th",
          day: "Friday",
          month: "February",
          start: "6pm",
          end: "9pm",
          title: '"Out of This World"'
        },
        {
          id: 12,
          date: "29th",
          day: "Saturday",
          month: "February",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie / Mike Renwick"'
        }
      ],
      march: [
        {
          id: 1,
          date: "1st",
          day: "Sunday",
          month: "March",
          start: "2pm",
          end: "4pm",
          title: '"Salem Ramblers"'
        },
        {
          id: 2,
          date: "6th",
          day: "Friday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Rewind Band"'
        },
        {
          id: 3,
          date: "7th",
          day: "Saturday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Joanne Broh Blues"'
        },
        {
          id: 4,
          date: "8th",
          day: "Sunday",
          month: "March",
          start: "12pm",
          end: "5pm",
          title:
            'Redgate Wine Club Pickup Party, featuring "Sig Paulson" (2pm - 4pm)'
        },
        {
          id: 5,
          date: "13th",
          day: "Friday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 6,
          date: "14th",
          day: "Saturday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Gil Reynolds Band"'
        },
        {
          id: 7,
          date: "15th",
          day: "Sunday",
          month: "March",
          start: "2pm",
          end: "4pm",
          title: "Dinna Fash Celtic Trio"
        },
        {
          id: 8,
          date: "20th",
          day: "Friday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Leanne McClellan Band"'
        },
        {
          id: 9,
          date: "21st",
          day: "Saturday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Rock \'n Roll Cowboys"'
        },
        {
          id: 10,
          date: "22nd",
          day: "Sunday",
          month: "March",
          start: "2pm",
          end: "4pm",
          title: '"Orvil Ivie"'
        },
        {
          id: 11,
          date: "27th",
          day: "Friday",
          month: "March",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie Trio"'
        },
        {
          id: 12,
          date: "28th",
          day: "Saturday",
          month: "March",
          start: "5pm",
          end: "9pm",
          title: '"Roundhouse"'
        },
        {
          id: 13,
          date: "29th",
          day: "Sunday",
          month: "March",
          start: "2pm",
          end: "4pm",
          title: '"Roundhouse"'
        }
      ],
      april: [
        {
          id: 1,
          date: "3rd",
          day: "Friday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Dead Band"'
        },
        {
          id: 2,
          date: "4th",
          day: "Saturday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie/Mike Renwick"'
        },
        {
          id: 3,
          date: "5th",
          day: "Sunday",
          month: "April",
          start: "2pm",
          end: "4pm",
          title: '"Sig Paulson"'
        },
        {
          id: 4,
          date: "10th",
          day: "Friday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Midnight Pass"'
        },
        {
          id: 5,
          date: "11th",
          day: "Saturday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Iron Butterfly\'s" Martin Gerschwitz'
        },
        {
          id: 6,
          date: "12th",
          day: "Sunday",
          month: "April",
          start: "1pm",
          end: "4pm",
          title: '"Iron Butterfly\'s" Martin Gerschwitz'
        },
        {
          id: 7,
          date: "17th",
          day: "Friday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Rewind Band"'
        },
        {
          id: 8,
          date: "18th",
          day: "Saturday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Joanne Broh Band"'
        },
        {
          id: 9,
          date: "19th",
          day: "Sunday",
          month: "April",
          start: "2pm",
          end: "4pm",
          title: '"Orvil Ivie"'
        },
        {
          id: 10,
          date: "24th",
          day: "Friday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Roundhouse Band"'
        },
        {
          id: 11,
          date: "25th",
          day: "Saturday",
          month: "April",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 12,
          date: "26th",
          day: "Sunday",
          month: "April",
          start: "2pm",
          end: "4pm",
          title: '"Ronnie Kay"'
        }
      ],
      may: [
        {
          id: 1,
          date: "1st",
          day: "Friday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie Trio"'
        },
        {
          id: 2,
          date: "2nd",
          day: "Saturday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Leanne McClellan Band"'
        },
        {
          id: 3,
          date: "3rd",
          day: "Sunday",
          month: "May",
          start: "2pm",
          end: "4pm",
          title: '"Sig Paulson"'
        },
        {
          id: 4,
          date: "8th",
          day: "Friday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Out of This World Band"'
        },
        {
          id: 5,
          date: "9th",
          day: "Saturday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"The Dead Band"'
        },
        {
          id: 6,
          date: "16th",
          day: "Saturday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Midnight Pass"'
        },
        {
          id: 7,
          date: "17th",
          day: "Sunday",
          month: "May",
          start: "2pm",
          end: "4pm",
          title: '"Ronnie Kay"'
        },
        {
          id: 8,
          date: "22nd",
          day: "Friday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Joanne Broh Blues"'
        },
        {
          id: 9,
          date: "23rd",
          day: "Saturday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 10,
          date: "24th",
          day: "Sunday",
          month: "May",
          start: "2pm",
          end: "4pm",
          title: '"TASKA"'
        },
        {
          id: 11,
          date: "30th",
          day: "Saturday",
          month: "May",
          start: "6pm",
          end: "9pm",
          title: '"Roundhouse"'
        }
      ],
      june: [
        {
          id: 1,
          date: "5th",
          day: "Friday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"Rewind Band"'
        },
        {
          id: 2,
          date: "6th",
          day: "Saturday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 3,
          date: "7th",
          day: "Sunday",
          month: "June",
          start: "2pm",
          end: "4pm",
          title: '"Sig Paulson"'
        },
        {
          id: 4,
          date: "12th",
          day: "Friday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"Midnight Pass"'
        },
        {
          id: 5,
          date: "13th",
          day: "Saturday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"Roundhouse"'
        },
        {
          id: 6,
          date: "19th",
          day: "Saturday",
          month: "June",
          start: "5pm",
          end: "11pm",
          title: '"Wanda\'s Wedding (Closed to Public)"'
        },
        {
          id: 7,
          date: "20th",
          day: "Saturday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie / Mike Renwick Duo"'
        },
        {
          id: 8,
          date: "21st",
          day: "Sunday",
          month: "June",
          start: "",
          end: "All Day",
          title: "Father's Day Party"
        },
        {
          id: 9,
          date: "26th",
          day: "Friday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"Joanne Broh Blues"'
        },
        {
          id: 10,
          date: "27th",
          day: "Saturday",
          month: "June",
          start: "6pm",
          end: "9pm",
          title: '"The Dead Band"'
        }
      ],
      july: [
        {
          id: 1,
          date: "3rd",
          day: "Friday",
          month: "July",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 2,
          date: "4th",
          day: "Saturday",
          month: "July",
          start: "6pm",
          end: "9pm",
          title: '"Roundhouse"'
        },
        {
          id: 3,
          date: "11th",
          day: "Saturday",
          month: "July",
          start: "6pm",
          end: "9pm",
          title: '"Out of This World Band"'
        },
        {
          id: 4,
          date: "24th",
          day: "Friday",
          month: "July",
          start: "6pm",
          end: "9pm",
          title: '"DRTR Blues Band"'
        },
        {
          id: 5,
          date: "25th",
          day: "Saturday",
          month: "July",
          start: "6pm",
          end: "9pm",
          title: '"Joanne Broh Band"'
        },
        {
          id: 6,
          date: "31st",
          day: "Friday",
          month: "July",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie Trio"'
        }
      ],
      august: [
        {
          id: 1,
          date: "1st",
          day: "Saturday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"The Dead Band"'
        },
        {
          id: 2,
          date: "7th",
          day: "Friday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"Out of This World Band"'
        },
        {
          id: 3,
          date: "14th",
          day: "Friday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"Leanne McClellan Band"'
        },
        {
          id: 4,
          date: "15th",
          day: "Saturday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"Ted Vaughn Blues Band"'
        },
        {
          id: 5,
          date: "22nd",
          day: "Saturday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"Roundhouse"'
        },
        {
          id: 6,
          date: "28th",
          day: "Friday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"DRTR Blues Band"'
        },
        {
          id: 7,
          date: "29th",
          day: "Saturday",
          month: "August",
          start: "6pm",
          end: "9pm",
          title: '"Orvil Ivie / Mike Renwick Duo"'
        }
      ]
    }
  }
};

const eventReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case 'CREATE_EVENT':
  //     console.log('created event', action.event);
  // }
  return state;
};

export default eventReducer;
