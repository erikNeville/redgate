const initState = {
  events: [
    {
      id: 1,
      date: 'October 27th',
      start: '2pm',
      end: '4pm',
      title: '"Mitch Lies" (Solo) - Guitar, Vocals',
    },
    {
      id: 2,
      date: 'November 1st',
      start: 'NA',
      end: 'NA',
      title: '“Orvil Ivie” (Trio) – (Costume Party)',
    },
    {
      id: 3,
      date: 'November 2nd',
      start: 'start time',
      end: 'end time',
      title: '“Rewind’ – 50’s & 60’s',
    },
    {
      id: 4,
      date: 'November 3rd',
      start: '2pm',
      end: '4pm',
      title: '“Patrick Anderson” R&R',
    },
  ],
};

const eventReducer = (state = initState) => {
  return state;
}

export default eventReducer;
