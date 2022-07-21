import * as React from 'react';
import FlexContainer from '../../../components/core/FlexContainer';
import { Hanzi } from '../../../types/xpolore';
import VocabularyItemWrapper, {
  WordType,
  WordName,
  WordPinyin,
  WordTranslation,
} from './styles';
import SpeakButton from '../../../components/SpeakWord';

interface VocabularyItemProps {
  hanzi: Hanzi;
}

function VocabularyItem(props: VocabularyItemProps) {
  const { hanzi } = props;

  return (
    <VocabularyItemWrapper direction="column">
      <FlexContainer>
        <FlexContainer fluid justify="space-between" align="center">
          <FlexContainer direction="column">
            <WordName>{hanzi.name}</WordName>
            <WordPinyin>{hanzi.pinyin}</WordPinyin>
          </FlexContainer>
          <FlexContainer align="center">
            {false && <WordType>{hanzi.type}</WordType>}
            <WordTranslation>
              {hanzi.translation.en.split(',').join(', ')}
            </WordTranslation>
          </FlexContainer>
        </FlexContainer>
        <SpeakButton
          value={hanzi.name}
          style={{
            position: 'absolute',
            left: 10,
            opacity: 0,
            width: 'calc(100% - 20px)',
            height: 60,
          }}
        />
      </FlexContainer>
    </VocabularyItemWrapper>
  );
}

export default VocabularyItem;
