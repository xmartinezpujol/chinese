import styled from 'styled-components';
import FlexContainer from '../../components/core/FlexContainer';
import { ColorPalette } from '../../constant';

const VocabularyContainer = styled(FlexContainer)`
  background-color: ${ColorPalette.WHITE};
  height: 100%;
  overflow-y: auto;
`;

interface SearchContainerProps {
  open: boolean;
}

const SearchContainer = styled(FlexContainer)`
  position: fixed;
  z-index: 40000;
  padding: 38px 30px;
  bottom: 0px;
  left: 0px;
  background-image: ${(props: SearchContainerProps) =>
    props.open
      ? 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
      : 'transparent'};
`;

interface SearchInputWrapperProps {
  open: boolean;
}

const SearchInputWrapper = styled(FlexContainer)`
  transition: all 0.25s ease;
  width: ${(props: SearchInputWrapperProps) =>
    props.open ? 'calc(100vw - 60px)' : 0};
  visibility: ${(props: SearchInputWrapperProps) =>
    props.open ? 'initial' : 'hidden'};

  margin-left: 20px;
`;

const Title = styled.h1``;

export { Title, SearchContainer, SearchInputWrapper };

export default VocabularyContainer;
