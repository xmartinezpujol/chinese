import * as React from 'react';
import styled from 'styled-components';
import FlexContainer from '../../core/FlexContainer';

interface WordCardProps {
  word: string;
  onHanziClick: (e, hanzi: string) => void;
  disabled?: boolean;
}

const Hanzi = styled.span`
  font-size: 50px;
  font-weight: 400;
  font-family: 'Noto Sans SC';
`;

function WordName(props: WordCardProps): JSX.Element {
  const { word, onHanziClick, disabled } = props;

  return (
    <FlexContainer>
      {/** @ts-ignore **/}
      {[...word].map((hanzi, index) => (
        <Hanzi
          key={`hanzi-${index}`}
          onClick={(e) => !disabled && onHanziClick(e, hanzi)}
        >
          {hanzi}
        </Hanzi>
      ))}
    </FlexContainer>
  );
}

export default WordName;
