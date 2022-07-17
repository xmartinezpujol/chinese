import * as React from 'react';
import { Hanzi } from '../../types/xpolore';
import WordCardContainer, {
  WordName,
  WordPhonetic,
  WordPhoneticWrapper,
  WordTranslation,
  WordType,
} from './styles';
import SpeakButton from '../SpeakWord';
import FlipCard from '../core/FlipCard';

interface WordCardProps {
  data: Hanzi;
  index: number;
}

function WordCard(props: WordCardProps): JSX.Element {
  const { data, index } = props;
  const lang = 'en';

  function renderFront() {
    return (
      <WordCardContainer direction="column" align="center" justify="center">
        <WordName>{data.name}</WordName>
        <WordPhonetic>{data.pinyin}</WordPhonetic>
        <WordType>{data.type}</WordType>
      </WordCardContainer>
    );
  }

  function renderBack() {
    return (
      <WordCardContainer direction="column" align="center" justify="center">
        <WordTranslation>{data.translation[lang]}</WordTranslation>
      </WordCardContainer>
    );
  }

  return (
    <>
      <WordPhoneticWrapper>
        <SpeakButton value={data.name} />
      </WordPhoneticWrapper>
      <FlipCard
        back={renderBack()}
        front={renderFront()}
        id={index}
        variant="click"
      />
    </>
  );
}

export default WordCard;
