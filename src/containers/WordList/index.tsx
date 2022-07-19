import * as React from 'react';
import WordCard from '../../components/WordCard';
import WordListContainer from './styles';
import { useState } from 'react';
import Button from '../../components/core/Button/Button';
import Loader from '../../components/core/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '../../constant';
import FlexContainer from '../../components/core/FlexContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setFilter } from '../../redux/modules/filters';

interface WordListProps {}

enum Action {
  Prev = 'prev',
  Next = 'next',
}

function WordList(props: WordListProps): JSX.Element {
  const [selected, setSelected] = useState(0);
  const { text } = useSelector((state: RootState) => state.filters);
  const { collection } = useSelector((state: RootState) => state.hanzis);

  const dispatch = useDispatch();

  function handleAction(action: Action) {
    if (action === Action.Prev && selected !== 0) {
      setSelected(selected - 1);
      dispatch(setFilter(''));
      return;
    }

    if (action === Action.Next && selected + 1 < collection.length) {
      setSelected(selected + 1);
      dispatch(setFilter(''));
    }
  }

  return (
    <WordListContainer direction="column" justify="center" align="center">
      {collection.length > 0 ? (
        <>
          <WordCard
            key={collection[selected].id}
            data={collection[selected]}
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
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                color={ColorPalette.RED}
              />
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
        </>
      ) : (
        <Loader />
      )}
    </WordListContainer>
  );
}

export default WordList;
