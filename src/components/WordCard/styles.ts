import styled from 'styled-components';
import FlexContainer from '../../components/core/FlexContainer';
import { ColorPalette } from '../../constant';

const WordCardContainer = styled(FlexContainer)`
  margin-top: 30px;
`;

const WordName = styled.span`
  font-size: 50px;
  font-weight: 400;
  font-family: 'Noto Sans SC';
`;

const WordPhonetic = styled.span`
  font-size: 30px;
  font-weight: 400;
  font-family: 'Noto Sans SC';
  color: ${ColorPalette.BLACK};
`;

const WordPhoneticWrapper = styled(FlexContainer)`
  position: absolute;
  z-index: 20000;
  top: 10px;
  right: 0px;
`;

const WordTranslation = styled.span`
  font-size: 40px;
  font-weight: 400;
  font-family: 'Poppins';
`;

const WordType = styled.span`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  font-family: 'Poppins';
  color: ${ColorPalette.DARK_GREY};
  margin-top: 20px;
`;

export {
  WordName,
  WordPhonetic,
  WordPhoneticWrapper,
  WordTranslation,
  WordType,
};

export default WordCardContainer;
