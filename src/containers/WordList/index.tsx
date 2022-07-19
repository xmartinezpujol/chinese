import * as React from 'react';
import { Hanzi } from '../../types/xpolore';
import WordCard from '../../components/WordCard';
import WordListContainer from './styles';
import { useEffect, useState } from 'react';
import Button from '../../components/core/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '../../constant';
import FlexContainer from '../../components/core/FlexContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setFilter } from '../../redux/modules/filters';
import { setCollection } from '../../redux/modules/hanzis';

interface WordListProps {
  list: Hanzi[];
}

enum Action {
  Prev = 'prev',
  Next = 'next',
}

function WordList(props: WordListProps): JSX.Element {
  const { list } = props;
  const [selected, setSelected] = useState(0);
  const { text } = useSelector((state: RootState) => state.filters);

  const dispatch = useDispatch();

  function handleAction(action: Action) {
    if (action === Action.Prev && selected !== 0) {
      setSelected(selected - 1);
      dispatch(setFilter(''));
      return;
    }

    if (action === Action.Next && selected + 1 < list.length) {
      setSelected(selected + 1);
      dispatch(setFilter(''));
    }
  }

  useEffect(() => {
    dispatch(setCollection(list));
  }, []);

  return (
    <WordListContainer direction="column" justify="center" align="center">
      <WordCard
        key={list[selected].id}
        data={list[selected]}
        index={selected}
        selected={text}
      />
      <FlexContainer justify="space-between" style={{ width: '100%' }}>
        <Button
          padding="30px 50px 30px 50px"
          onClick={() => handleAction(Action.Prev)}
          backgroundColor="transparent"
          style={{ width: '50%', justifyContent: 'center' }}
        >
          <FontAwesomeIcon icon={faClose} size="lg" color={ColorPalette.RED} />
        </Button>
        <Button
          padding="30px 50px 30px 50px"
          onClick={() => handleAction(Action.Next)}
          backgroundColor="transparent"
          style={{ width: '50%', justifyContent: 'center' }}
        >
          <FontAwesomeIcon
            icon={faCheck}
            size="lg"
            color={ColorPalette.GREEN}
          />
        </Button>
      </FlexContainer>
    </WordListContainer>
  );
}

export default WordList;
