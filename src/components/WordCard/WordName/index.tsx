import * as React from 'react';
import styled from 'styled-components';
import FlexContainer from '../../core/FlexContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ColorPalette } from '../../../constant';
import { useEffect, useState } from 'react';

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
  const { collection } = useSelector((state: RootState) => state.hanzis);
  const [list, setList] = useState([]);

  function isHanziRef(hanzi: string) {
    return list.includes(hanzi);
  }

  useEffect(() => {
    const list = collection.map((hanzi) => hanzi.name);
    setList(list);
  }, [collection]);

  return (
    <FlexContainer>
      {/** @ts-ignore **/}
      {[...word].map((hanzi, index) => {
        // @ts-ignore
        const isInteractive = [...word].length > 1 && isHanziRef(hanzi);
        return (
          <Hanzi
            key={`hanzi-${index}`}
            onClick={(e) =>
              !disabled && isInteractive && onHanziClick(e, hanzi)
            }
            style={{
              color: isInteractive ? ColorPalette.GREEN : 'black',
            }}
          >
            {hanzi}
          </Hanzi>
        );
      })}
    </FlexContainer>
  );
}

export default WordName;
