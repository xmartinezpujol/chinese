import * as React from 'react';
import WordCardContainer, {
  WordPhonetic,
  WordPhoneticWrapper,
  WordTranslation,
  WordType,
} from '../styles';
import WordName from '../WordName';
import FlipCard from '../../core/FlipCard';
import SpeakButton from '../../SpeakWord';
import { Hanzi } from '../../../types/xpolore';

interface WordContentProps {
  data: Hanzi;
  onHanziClick?: (event, hanzi) => void;
  index: number;
  hide?: {
    type: boolean;
  };
}

function WordContent(props: WordContentProps) {
  const { data, onHanziClick, index, hide = null } = props;
  const lang = 'en';

  function formatWordStyle(words: string[]) {
    const { length } = words;
    switch (length) {
      case 1:
        if (words[0].length > 10) {
          return 25;
        }

        return 40;
      case 2:
        return 30;
      case 3:
        return 20;
    }
  }

  function formatTranslations(translations: string) {
    const words = translations.split(',');
    return words.map((word) => (
      <WordTranslation key={word} style={{ fontSize: formatWordStyle(words) }}>
        {word}
      </WordTranslation>
    ));
  }

  function renderFront() {
    return (
      <WordCardContainer direction="column" align="center" justify="center">
        <WordName
          word={data.name}
          onHanziClick={(e, hanzi: string) =>
            onHanziClick && onHanziClick(e, hanzi)
          }
        />
        <WordPhonetic>{data.pinyin}</WordPhonetic>
        {hide === null && <WordType>{data.type}</WordType>}
      </WordCardContainer>
    );
  }

  function renderBack() {
    return (
      <WordCardContainer direction="column" align="center" justify="center">
        {formatTranslations(data.translation[lang])}
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

export default WordContent;
