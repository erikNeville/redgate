const initState = {
  news: [
    {
      id: 1,
      date: 'some date',
      start: 'start time',
      end: 'end time',
      news: 'some news',
    },
    {
      id: 2,
      date: 'some date',
      start: 'start time',
      end: 'end time',
      news: 'some news',
    },
    {
      id: 3,
      date: 'some date',
      start: 'start time',
      end: 'end time',
      news: 'some news',
    },
  ],
};

const newsReducer = (state = initState) => {
  return state;
}

export default newsReducer;
