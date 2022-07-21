import styled from 'styled-components';
import FlexContainer from '../../components/core/FlexContainer';
import { ColorPalette } from '../../constant';

const VocabularyContainer = styled(FlexContainer)`
  position: relative;
  background-color: ${ColorPalette.WHITE};
  border-radius: 10px;
  top: 18px;
  height: calc(100% - 50px);
  overflow-y: auto;
`;

const Title = styled.h1``;

export { Title };

export default VocabularyContainer;
