import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';

const StyledMarker = styled(FontAwesomeIcon)`
  position: relative;
  transition: all 0.3s ease;
`;

function UserMarker() {
  return (
    <div>
      <StyledMarker
        icon={faStreetView}
        color="orangered"
        size="2x"
        style={{ transform: 'translate(-50%, -100%)' }}
      />
    </div>
  );
}

export default UserMarker;
