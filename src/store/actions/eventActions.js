export const createEvent = (event) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('events').add({
      ...event,
    })
    dispatch({type: 'CREATE_EVENT', event});
  };
};
