import React from 'react';
import { DescriptionDiv } from './CustomStyle';

const Description = props => {
  return (
    <DescriptionDiv>
      <hr />
      <p className='notice-info'>
        Redgate has suspended its evening concerts until the weather improves
        enough to open up the Fieldhouse garage doors, therefore providing more
        space for social distancing.
        <br /> We will however, reinstate our "Solo Sundays" concerts.
      </p>
      <p className='notice-info'>
        We will also start <strong>Solo Saturdays!</strong> Our intention is
        twofold:
      </p>
      <p className='notice-info'>
        First, we want to get some bread to our family of Redgate entertainers.
      </p>
      <p className='notice-info'>
        Second, we want to get the public comfortable coming out to our venue in
        a low key atmosphere with limited seating, social distancing, bring your
        own picnic, daylight operations, and the knowledge that that their
        exposure is managed with the best known methods. Outdoor seating
        available depending on the weather.
      </p>
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
