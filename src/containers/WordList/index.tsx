import * as React from 'react';
import { Hanzi } from '../../types/xpolore';
import WordCard from '../../components/WordCard';
import WordListContainer from './styles';
import { useState } from 'react';
import Button from '../../components/core/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCheckCircle,
  faClose,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '../../constant';
import FlexContainer from '../../components/core/FlexContainer';

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

  function handleAction(action: Action) {
    if (action === Action.Prev && selected !== 0) {
      setSelected(selected - 1);
      return;
    }

    if (action === Action.Next && selected + 1 < list.length) {
      setSelected(selected + 1);
    }
  }

  return (
    <WordListContainer direction="column" justify="center" align="center">
      <WordCard
        key={list[selected].id}
        data={list[selected]}
        index={selected}
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
