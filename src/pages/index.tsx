import * as React from 'react';
import styled from 'styled-components';

import SEO from '../components/core/Seo';
import Layout from '../components/core/Layout';

import Map from '../containers/Map';

import { useMemo, useState } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { usePosition, usePositionArgs } from '../hooks/usePosition';
import WordList from '../containers/WordList';

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Index: React.FC = () => {
  const [selected, setSelected] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [locations, setLocations] = useState([]);
  const { latitude, longitude } = usePosition<usePositionArgs>(true, {
    enableHighAccuracy: true,
  });
  const places = usePlaces();

  const userPosition = useMemo(() => {
    return {
      lat: latitude,
      lng: longitude,
    };
  }, [latitude, longitude]);

  function handleCenterMap(coordinate) {
    setSelectedPosition({
      lat: coordinate.lat,
      lng: coordinate.lng,
    });
  }

  function handleSelected(selectedId, coordinates) {
    setSelected(selectedId);
    setDetailOpen(true);
    handleCenterMap(coordinates);
  }

  function handleOnMarkerClick(entityId, coordinates) {
    handleSelected(entityId, coordinates);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MapContainer>
        {isDetailOpen && <WordList list={places.nodes} />}
        <Map
          center={selectedPosition ? selectedPosition : userPosition}
          selectedId={selected}
          onMarkerClick={handleOnMarkerClick}
          places={places.nodes}
          userPosition={userPosition}
        />
      </MapContainer>
    </Layout>
  );
};

export default Index;
