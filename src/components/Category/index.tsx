import * as React from 'react';
import styled from 'styled-components';
import CategorySelectors, { Option } from './CategorySelectors';
import { ColorPalette } from '../../constant';
import { useState } from 'react';
import OutsideClicker from '../../hooks/useOutsideAlerter';
import FlexContainer from '../core/FlexContainer';

const SelectedCategory = styled.h1`
  display: inline-block;
  position: relative;
  font-size: 26px;
  font-weight: 400;
  color: ${ColorPalette.BRIGHT_EXPORTER};

  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${ColorPalette.BRIGHT_EXPORTER};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover {
    cursor: pointer;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  & span {
    color: ${ColorPalette.WHITE};
  }
`;

interface CategoryProps {
  onChange: (value: SelectedOption) => void;
  options: Option[];
  defaultValue: Option;
  modes: Option[];
  defaultMode: Option;
}

export interface SelectedOption {
  [key: string]: {
    value: string;
    label: string;
  };
}

function Category(props: CategoryProps) {
  const { options, onChange, defaultValue, defaultMode, modes } = props;
  const [isOpen, setOpen] = useState(false);
  const [category, setCategory] = useState(defaultValue);

  function handleApplyFilters(selection: SelectedOption) {
    setCategory(category);
    onChange(selection);
  }

  const categorySelectors = (
    <OutsideClicker onClickOutside={() => setOpen(false)}>
      <CategorySelectors
        defaultValue={defaultValue}
        defaultMode={defaultMode}
        onChange={(value: SelectedOption) => handleApplyFilters(value)}
        onClose={() => setOpen(false)}
        options={options}
        modes={modes}
      />
    </OutsideClicker>
  );

  return (
    <FlexContainer style={{ position: 'relative' }}>
      <SelectedCategory onClick={() => setOpen(true)}>
        {category.label}
      </SelectedCategory>
      {isOpen && categorySelectors}
    </FlexContainer>
  );
}

export default Category;
