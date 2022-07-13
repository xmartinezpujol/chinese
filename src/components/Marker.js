import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getMarkerProps, MAP_MARKER_STATUS } from '../helpers/map';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const StyledMarker = styled(FontAwesomeIcon)`
  position: relative;
  transition: all 0.3s ease;
  z-index: ${props => (props.selected ? '1000' : '2')};
`;

function Marker(props) {
  const { type, selected, onClick } = props;
  const { icon, color } = getMarkerProps(type);
  return (
    <div onClick={onClick}>
      <StyledMarker
        icon={faMapMarker}
        selected={selected}
        color={selected ? color : MAP_MARKER_STATUS.DEFAULT}
        style={{ transform: 'translate(-50%, -100%)' }}
        size={selected ? '8x' : '4x'}
      />
      <StyledMarker
        icon={icon}
        selected={selected}
        color={selected ? MAP_MARKER_STATUS.DEFAULT : color}
        style={{
          transform: selected
            ? 'translate(-50%, -720%)'
            : 'translate(-50%, -550%)',
        }}
        size={selected ? '2x' : 'lg'}
      />
    </div>
  );
}

export default Marker;
