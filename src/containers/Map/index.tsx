import * as React from 'react';

import GoogleMapReact from 'google-map-react';
import UserMarker from '../../components/Marker/UserMarker';
import IconMarker from '../../components/Marker/IconMarker';
import { MAP_ICON_MARKERS } from '../../helpers/map';
import MapStyles from '../../config/MapStyles';
import { PlacesQueryResult } from '../../hooks/usePlaces';

const DEFAULT_ZOOM = 15;
const API_KEY = 'AIzaSyCzeXJiOZHF9bq0KOPFvnHZi0xHAOCfXdc';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  userPosition: {
    lat: string;
    lng: string;
  };
  selectedId: string;
  onMarkerClick: (
    id: string,
    coordinates: { lat: number; lng: number }
  ) => void;
  places: PlacesQueryResult[];
}

function Map(props: MapProps) {
  const { center, selectedId, onMarkerClick, userPosition, places } = props;

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
      {places.map((entity) => (
        <IconMarker
          onClick={() => {
            const entityId = entity.id;
            onMarkerClick(entityId, entity.coordinates);
          }}
          selected={entity.id === selectedId}
          type={entity.type ? entity.type : MAP_ICON_MARKERS.GREENPOINT}
          key={entity.id}
          lat={entity.coordinates.lat}
          lng={entity.coordinates.lng}
        />
      ))}
      <UserMarker lat={userPosition.lat} lng={userPosition.lng} />
    </GoogleMapReact>
  );
}

export default Map;
