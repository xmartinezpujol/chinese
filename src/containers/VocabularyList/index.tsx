import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import VocabularyContainer from './styles';
import VocabularyItem from './VocabularyItem';
import { sortedByEnHanzis } from '../../redux/modules/hanzis';
import Input from '../../components/core/Form/Input';
import FlexContainer from '../../components/core/FlexContainer';

function VocabularyList() {
  const { context } = useSelector((state: RootState) => state.filters);
  const hanzis = useSelector(sortedByEnHanzis);

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (context && hanzis) {
      setList(
        hanzis.filter(
          (hanzi) =>
            hanzi.translation.en.includes(filter) &&
            hanzi.tags.includes(context.category.value)
        )
      );
    }
  }, [context, hanzis, filter]);

  return (
    <>
      <VocabularyContainer
        fluid
        direction="column"
        margin="10px"
        padding="30px"
      >
        {list.map((item) => (
          <VocabularyItem key={item.id} hanzi={item} />
        ))}
      </VocabularyContainer>
      <FlexContainer style={{ position: 'absolute', bottom: 45, left: 20 }}>
        <Input
          placeholder="Search..."
          initialValue=""
          onChange={(value) => setFilter(value as string)}
          style={{ width: 250 }}
        />
      </FlexContainer>
    </>
  );
}

export default VocabularyList;
