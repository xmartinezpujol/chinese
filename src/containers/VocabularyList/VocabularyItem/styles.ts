import styled from 'styled-components';
import FlexContainer from '../../../components/core/FlexContainer';
import { ColorPalette } from '../../../constant';

const WordName = styled.span`
  margin-right: 5px;
  font-size: 26px;
  color: ${ColorPalette.GREEN};
`;

const WordPinyin = styled.span`
  font-size: 13px;
  color: ${ColorPalette.DARKER_BLUE};
`;

const WordTranslation = styled.span`
  font-size: 14px;
  color: ${ColorPalette.LIGHT_BLACK};
`;

const WordType = styled.strong`
  margin-right: 5px;
  text-transform: uppercase;
  font-size: 10px;
  color: ${ColorPalette.DARK_BLUE};
`;

const VocabularyItemWrapper = styled(FlexContainer)`
  font-size: 13px;
  padding: 10px 0px;
  border-bottom: 1px solid ${ColorPalette.MID_GREY};
`;

export default VocabularyItemWrapper;
export { WordType, WordName, WordPinyin, WordTranslation };
