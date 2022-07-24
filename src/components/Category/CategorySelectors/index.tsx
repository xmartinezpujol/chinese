import * as React from 'react';
import styled from 'styled-components';
import { ColorPalette } from '../../../constant';
import FlexContainer from '../../core/FlexContainer';
import DropDown from '../../core/Form/Dropdown';
import Button from '../../core/Button/Button';
import { useState } from 'react';
import { SelectedOption } from '../index';

export interface Option {
  value: string;
  label: string;
}

interface CategorySelectorsProps {
  onChange: (value: SelectedOption) => void;
  onClose: () => void;
  options: Option[];
  modes: Option[];
  defaultValue: Option;
  defaultMode: Option;
}

const Container = styled(FlexContainer)`
  position: absolute;
  padding: 20px 20px 20px 0px;
  box-shadow: -1px 1px 10px rgb(0 0 0 / 19%), 0 3px 3px rgb(0 0 0 / 13%);
  border-radius: 8px;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 70px;
  z-index: 10000;
  background-color: ${ColorPalette.WHITE};
  transition: 0.8s ease-in;
`;

const Actions = styled(FlexContainer)`
  font-size: 12px;
  padding: 0px 10px;
`;

const FilterWrapper = styled(FlexContainer)`
  margin-bottom: 20px;
`;

const FilterLabel = styled.span`
  color: ${ColorPalette.DARK_GREY};
  font-size: 13px;
  margin-right: 10px;
  margin-left: 20px;
`;

function CategorySelectors(props: CategorySelectorsProps) {
  const { onChange, onClose, options, defaultValue, defaultMode, modes } =
    props;
  const [category, setCategory] = useState<Option>(defaultValue);
  const [mode, setMode] = useState<Option>(defaultMode);

  function handleSelectCategory(category: Option) {
    setCategory(category);
  }

  function handleSelectMode(mode: Option) {
    setMode(mode);
  }

  function applyFilters() {
    onChange({
      category,
      mode,
    });
  }

  return (
    <Container direction="column">
      <FilterWrapper align="center">
        <FilterLabel>{'Category: '}</FilterLabel>
        <DropDown
          width="130px"
          selectedValue={category}
          values={options}
          onChange={(value: Option) => handleSelectCategory(value)}
        />
      </FilterWrapper>
      <FilterWrapper align="center">
        <FilterLabel>{'Mode: '}</FilterLabel>
        <DropDown
          width="130px"
          selectedValue={mode}
          values={modes}
          onChange={(value: Option) => handleSelectMode(value)}
        />
      </FilterWrapper>
      <Actions fluid justify="flex-end" align="center">
        <Button
          radius="2px"
          padding="0px 10px"
          textColor={ColorPalette.DARK_GREY}
          backgroundColor="transparent"
          backgroundHoverColor={ColorPalette.MID_GREY}
          style={{ fontSize: 14, fontWeight: 500, height: 34 }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          radius="2px"
          padding="0px 10px"
          textColor={ColorPalette.EXPORTER_DARK}
          backgroundColor="transparent"
          backgroundHoverColor={ColorPalette.MID_GREY}
          style={{ fontSize: 14, fontWeight: 500, height: 34 }}
          onClick={applyFilters}
        >
          Apply
        </Button>
      </Actions>
    </Container>
  );
}

export default CategorySelectors;
