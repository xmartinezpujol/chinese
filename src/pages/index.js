import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

import Layout from '../components/layout';
import Map from '../containers/Directory/Map';

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      center: {
        lat: 41.390205,
        lng: 2.154007,
      },
      filters: {
        tags: [],
        types: [],
      },
      isDetailOpen: false,
    };
  }

  handleCenterMap = coordinate => {
    this.setState({
      center: {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
      },
    });
  };

  handleSelected = selectedId => {
    this.setState({
      selectedId,
      isDetailOpen: false,
    });
  };

  handleOnMarkerClick = entityId => {
    this.handleSelected(entityId);
  };

  render() {
    const { center, selectedId } = this.state;
    return (
      <Layout>
        <SEO title="Home" />
        <MapContainer>
          <Map
            center={center}
            selectedId={selectedId}
            onMarkerClick={this.handleOnMarkerClick}
          />
        </MapContainer>
      </Layout>
    );
  }
}

export default Index;
