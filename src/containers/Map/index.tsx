import * as React from 'react';

import GoogleMapReact from 'google-map-react';
import UserMarker from '../../components/Marker/UserMarker';
import IconMarker from '../../components/Marker/IconMarker';
import { MAP_ICON_MARKERS } from '../../helpers/map';
import MapStyles from '../../config/MapStyles';
import { usePosition, usePositionArgs } from '../../hooks/usePosition';

const DEFAULT_ZOOM = 15;
const API_KEY = 'AIzaSyCzeXJiOZHF9bq0KOPFvnHZi0xHAOCfXdc';

function Map(props) {
  const { center, selectedId, onMarkerClick } = props;
  const entities = [];
  const { latitude, longitude } = usePosition<usePositionArgs>(true, {
    enableHighAccuracy: true,
  });

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      yesIWantToUseGoogleMapApiInternals
      defaultZoom={DEFAULT_ZOOM}
      center={center}
      options={{
        styles: MapStyles,
        fullscreenControl: false,
      }}
    >
      {entities.map((entity) => (
        <IconMarker
          onClick={() => {
            const entityId = entity.node.id;
            onMarkerClick(entityId);
          }}
          selected={entity.node.id === selectedId}
          type={
            entity.node.data.type
              ? entity.node.data.type
              : MAP_ICON_MARKERS.GREENPOINT
          }
          key={entity.node.id}
          lat={entity.node.data.location.latitude}
          lng={entity.node.data.location.longitude}
        />
      ))}
      <UserMarker lat={latitude} lng={longitude} />
    </GoogleMapReact>
  );
}

export default Map;
