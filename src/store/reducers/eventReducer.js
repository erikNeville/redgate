const initState = {
  events: [
    {
      id: 1,
      date: 'some date',
      start: 'start time',
      end: 'end time',
      title: 'some title',
    },
    {
      id: 2,
      date: 'some date',
      start: 'start time',
      end: 'end time',
      title: 'some title',
    },
    {
      id: 3,
      date: 'some date',
      start: 'start time',
      end: 'end time',
      title: 'some title',
    },
  ],
};

const eventReducer = (state = initState) => {
  return state;
}

export default eventReducer;
