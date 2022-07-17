import * as React from 'react';
import { Hanzi } from '../../types/xpolore';
import { WordHanziSelectedWrapper } from './styles';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/modules/filters';
import { useEffect, useState } from 'react';
import WordContent from './WordContent';

interface WordCardProps {
  data: Hanzi;
  index: number;
  source?: Hanzi[];
  selected: string;
}

function WordCard(props: WordCardProps): JSX.Element {
  const { data, index, source, selected } = props;
  const [wordSelected, setWordSelected] = useState<Hanzi | null>(null);
  const dispatch = useDispatch();

  function handleHanziSelection(e, hanzi: string) {
    if (data.name !== hanzi) {
      e.stopPropagation();
      dispatch(setFilter(hanzi));
    }
  }

  useEffect(() => {
    if (selected && selected !== '') {
      const wordSelected = source.find((word) => word.name === selected);

      if (wordSelected) {
        setWordSelected(wordSelected);
      }
    }
  }, [selected]);

  return (
    <>
      <WordContent
        key={data.id}
        data={data}
        index={index}
        onHanziClick={(e, hanzi: string) => handleHanziSelection(e, hanzi)}
      />
      {wordSelected !== null && (
        <WordHanziSelectedWrapper
          direction="column"
          align="center"
          justify="center"
        >
          <WordContent
            key={wordSelected.id}
            data={wordSelected}
            index={index}
            hide={{ type: true }}
          />
        </WordHanziSelectedWrapper>
      )}
    </>
  );
}

export default WordCard;
