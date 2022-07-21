import * as React from 'react';

import Layout from '../components/core/Layout';
import Seo from '../components/core/Seo';
import { ColorPalette } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setContext } from '../redux/modules/filters';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import FlexContainer from '../components/core/FlexContainer';
import DropDown from '../components/core/Form/Dropdown';
import Button from '../components/core/Button/Button';
import VocabularyList from '../containers/VocabularyList';
import SentencesList from '../containers/SentencesList';

interface Option {
  value: string;
  label: string;
}

enum Mode {
  'Vocabulary' = 'vocabulary',
  'Sentences' = 'sentences',
}

const modes: Mode[] = [Mode.Vocabulary, Mode.Sentences];

const Places = () => {
  const dispatch = useDispatch();
  const { context } = useSelector((state: RootState) => state.filters);

  const CardsContainer = styled.div`
    display: flex;
    background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  `;

  const CategoriesContainer = styled(FlexContainer)``;

  const ContextSelector = styled(FlexContainer)`
    position: absolute;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
  `;

  const options = [
    { value: 'home', label: 'Home' },
    { value: 'park', label: 'Park' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'supermarket', label: 'Supermarket' },
  ];

  function handlePlaceSelection(value: Option) {
    dispatch(
      setContext({
        mode: context.mode,
        category: value,
      })
    );
    navigate(`/places/${value.value}`);
  }

  function handleModeSelection(mode: Mode) {
    dispatch(
      setContext({
        mode,
        category: context.category,
      })
    );
    navigate(`/places/${context.category.value}`);
  }

  return (
    <Layout>
      {console.log('rerender')}
      <Seo title={`Place - ${context.category.label}`} />
      <CardsContainer>
        <ContextSelector>
          <DropDown
            width="200px"
            selectedValue={context.category}
            values={options}
            onChange={(value: Option) => handlePlaceSelection(value)}
          />
        </ContextSelector>
        <CategoriesContainer
          fluid
          align="flex-end"
          justify="space-between"
          padding="10px 0px 140px 0px"
        >
          {context.mode === null &&
            modes.map((mode) => (
              <Button
                key={mode}
                style={{
                  width: 'calc(50% - 5px)',
                  justifyContent: 'center',
                  height: 120,
                  fontSize: 20,
                }}
                backgroundColor={ColorPalette.WHITE}
                backgroundHoverColor={ColorPalette.MID_GREY}
                textHoverColor={ColorPalette.GREEN}
                onClick={() => handleModeSelection(mode)}
              >
                {mode}
              </Button>
            ))}
          {context.mode === Mode.Vocabulary && <VocabularyList />}
          {context.mode === Mode.Sentences && <SentencesList />}
        </CategoriesContainer>
      </CardsContainer>
    </Layout>
  );
};

export default Places;
