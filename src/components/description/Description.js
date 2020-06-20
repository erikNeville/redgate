import React from 'react';
import { DescriptionDiv } from './CustomStyle';

const Description = (props) => {
  return (
    <DescriptionDiv>
      <hr />
      <p className='content'>
        Redgate Vineyard is a small, family owned winery crafting small lot,
        artisan wines reflecting the terroir of Redgate Estate and located just
        1 mile from the Willamette River and 12 miles SW of the State Capitol,
        Salem, Oregon.
      </p>
      {/* <p className='content'>Redgate Vineyard enjoys the cool coastal breezes that flow in the Siletz River Valley, giving our wines a vivacious acidity that produces wines of great depth, longevity, and distinction.</p>     */}
    </DescriptionDiv>
  );
};

export default Description;
