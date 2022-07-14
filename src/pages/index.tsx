import * as React from 'react';
import styled from 'styled-components';

import SEO from '../components/core/Seo';
import Layout from '../components/core/Layout';

import Map from '../containers/Map';

import { useState } from 'react';

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
  const [cordinates, setCordinates] = useState({
    lat: 41.390205,
    lng: 2.154007,
  });

  function handleCenterMap(coordinate) {
    setCordinates({
      lat: coordinate.latitude,
      lng: coordinate.longitude,
    });
  }

  function handleSelected(selectedId) {
    setSelected({
      selectedId,
      isDetailOpen: false,
    });
  }

  function handleOnMarkerClick(entityId) {
    this.handleSelected(entityId);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MapContainer>
        <Map
          center={cordinates}
          selectedId={selected}
          onMarkerClick={handleOnMarkerClick}
        />
      </MapContainer>
    </Layout>
  );
};

export default Index;
