const initState = {
  menuItems: {
    pizza: [
      { id: 1, type: 'Hawaiin', price: '$20' },
      { id: 2, type: 'Carnivore', price: '$20' },
      { id: 3, type: 'Italian Sausage and Mushroom', price: '$20' },
      { id: 4, type: 'Pepperoni and Black Olive', price: '$20' },
      { id: 5, type: 'Veggie', price: '$20' },
    ],
  },
};

const menuReducer = (state = initState) => {
  return state;
};

export default menuReducer;
