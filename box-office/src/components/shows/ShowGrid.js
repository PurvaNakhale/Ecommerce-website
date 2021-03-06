import React from 'react';
import ShowCard from './ShowCard';

// eslint-disable-next-line import/named
import { FlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summery={show.summery}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
