import entry from '../../images/entry_gate/entry_gate.jpg';
import field from '../../images/field_house/field_house.jpg';
import red from '../../images/red_grapes/red_grapes.jpg';
import view from '../../images/view/view.jpg';
import allwines from '../../images/wines/allwines.jpg';

const initState = {
  images: [
    {
      id: 1,
      src: entry,
      title: 'Welcome to Redgate Vineyard',
    },
    {
      id: 2,
      src: field,
      title: 'Redgate Field House & Events',
    },
    {
      id: 3,
      src: allwines,
      title: 'Redgate Wines',
    },
    {
      id: 4,
      src: red,
      title: 'Redgate Retailers',
    },
    {
      id: 5,
      src: red,
      title: 'Contact Redgate Vineyard',
    },
  ]
};

const imageReducer = (state = initState, action) => {
  return state;
};

export default imageReducer;
