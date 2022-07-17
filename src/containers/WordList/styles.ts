import styled from 'styled-components';
import FlexContainer from '../../components/core/FlexContainer';
import { ColorPalette } from '../../constant';

const WordListContainer = styled(FlexContainer)`
  position: absolute;
  z-index: 10000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: ${ColorPalette.WHITE};
  border-radius: 10px;
`;

export default WordListContainer;
