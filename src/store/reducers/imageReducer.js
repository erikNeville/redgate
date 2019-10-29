import entry from '../../images/entry_gate/entry_gate.jpg';

/* 
Anything commented is possibly not needed.
Keeping it here in case we need to incorporate
different size images.
*/

// import entry2500 from '../../images/entry_gate/entry_gate2500.jpg';
// import entry1500 from '../../images/entry_gate/entry_gate1500.jpg';
// import entry1000 from '../../images/entry_gate/entry_gate1000.jpg';
// import entry750 from '../../images/entry_gate/entry_gate750.jpg';
// import entry500 from '../../images/entry_gate/entry_gate500.jpg';
// import entry300 from '../../images/entry_gate/entry_gate300.jpg';
// import entry100 from '../../images/entry_gate/entry_gate100.jpg';

// import field2500 from '../../images/field_house/field_house2500.jpg';
// import field1500 from '../../images/field_house/field_house1500.jpg';
// import field1000 from '../../images/field_house/field_house1000.jpg';
// import field750 from '../../images/field_house/field_house750.jpg';
// import field500 from '../../images/field_house/field_house500.jpg';
// import field300 from '../../images/field_house/field_house300.jpg';
// import field100 from '../../images/field_house/field_house100.jpg';
import field from '../../images/field_house/field_house.jpg';

// import red2500 from '../../images/red_grapes/red_grapes2500.jpg';
// import red1500 from '../../images/red_grapes/red_grapes1500.jpg';
// import red1000 from '../../images/red_grapes/red_grapes1000.jpg';
// import red750 from '../../images/red_grapes/red_grapes750.jpg';
// import red500 from '../../images/red_grapes/red_grapes500.jpg';
// import red300 from '../../images/red_grapes/red_grapes300.jpg';
// import red100 from '../../images/red_grapes/red_grapes100.jpg';
import red from '../../images/red_grapes/red_grapes.jpg';

// import view2500 from '../../images/view/view2500.jpg';
// import view1500 from '../../images/view/view1500.jpg';
// import view1000 from '../../images/view/view1000.jpg';
// import view750 from '../../images/view/view750.jpg';
// import view500 from '../../images/view/view500.jpg';
// import view300 from '../../images/view/view300.jpg';
// import view100 from '../../images/view/view100.jpg';
import view from '../../images/view/view.jpg';

// import wines2500 from '../../images/wines/wines2500.jpg';
// import wines1500 from '../../images/wines/wines1500.jpg';
import wines1000 from '../../images/wines/wines1000.jpg';
// import wines750 from '../../images/wines/wines750.jpg';
// import wines500 from '../../images/wines/wines500.jpg';
// import wines300 from '../../images/wines/wines300.jpg';
// import wines100 from '../../images/wines/wines100.jpg';

const initState = {
  images: [
    {
      id: 1,
      src: entry,
      title: 'Redgate Entry',
    },
    {
      id: 2,
      src: field,
      title: 'Redgate Field House',
    },
    {
      id: 3,
      src: red,
      title: 'Redgate Grapes',
    },
    {
      id: 4,
      src: view,
      title: 'Redgate View',
    },
    {
      id: 5,
      src: wines1000,
      title: 'Redgate Wines',
    },
  ]
};

const imageReducer = (state = initState, action) => {
  return state;
};

export default imageReducer;
