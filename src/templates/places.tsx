import * as React from 'react';

import Layout from '../components/core/Layout';
import Seo from '../components/core/Seo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setContext } from '../redux/modules/filters';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import FlexContainer from '../components/core/FlexContainer';
import VocabularyList from '../containers/VocabularyList';
import SentencesList from '../containers/SentencesList';
import Category, { SelectedOption } from '../components/Category';

interface Option {
  value: string;
  label: string;
}

enum Mode {
  'Vocabulary' = 'vocabulary',
  'Sentences' = 'sentences',
}

const modes: Option[] = [
  { value: Mode.Vocabulary, label: 'Vocabulary' },
  { value: Mode.Sentences, label: 'Sentences' },
];

const Places = () => {
  const dispatch = useDispatch();
  const { context } = useSelector((state: RootState) => state.filters);

  const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `;

  const CategoriesContainer = styled(FlexContainer)``;

  const ContextSelector = styled(FlexContainer)`
    position: sticky;
    z-index: 40000;
    top: 0;
    left: 0;
    margin-top: 0px;
    width: 100%;
    justify-content: center;
    background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  `;

  const options = [
    { value: 'home', label: 'Home' },
    { value: 'park', label: 'Park' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'supermarket', label: 'Supermarket' },
  ];

  function handlePlaceSelection(value: SelectedOption) {
    dispatch(
      setContext({
        mode: value.mode,
        category: value.category,
      })
    );
    navigate(`/places/${value.category.value}`);
  }

  return (
    <Layout>
      <Seo title={`Place - ${context.category.label}`} />
      <CardsContainer>
        <ContextSelector>
          <Category
            options={options}
            modes={modes}
            onChange={handlePlaceSelection}
            defaultValue={context.category}
            defaultMode={{
              value: context.mode.value,
              label: context.mode.label,
            }}
          />
        </ContextSelector>
        <CategoriesContainer fluid align="flex-end" justify="space-between">
          {context.mode.value === Mode.Vocabulary && <VocabularyList />}
          {context.mode.value === Mode.Sentences && <SentencesList />}
        </CategoriesContainer>
      </CardsContainer>
    </Layout>
  );
};

export default Places;
