import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import VocabularyContainer from '../VocabularyList/styles';
import VocabularyItem from '../VocabularyList/VocabularyItem';
import { useEffect, useState } from 'react';

function SentencesList() {
  const { sentences } = useSelector((state: RootState) => state.hanzis);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (sentences) {
      setList(sentences);
    }
  }, [sentences]);

  return (
    <VocabularyContainer
      fluid
      direction="column"
      padding="15px 30px 140px 30px"
    >
      {list.map((item) => (
        <VocabularyItem key={item.id} hanzi={item} />
      ))}
    </VocabularyContainer>
  );
}

export default SentencesList;
