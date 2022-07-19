import * as React from 'react';
import styled from 'styled-components';

import SEO from '../components/core/Seo';
import Layout from '../components/core/Layout';

import WordList from '../containers/WordList';

const CardsContainer = styled.div`
  display: flex;
  background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Index: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CardsContainer>
        <WordList />
      </CardsContainer>
    </Layout>
  );
};

export default Index;
