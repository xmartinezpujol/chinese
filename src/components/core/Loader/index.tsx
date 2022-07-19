import styled, { keyframes } from 'styled-components';
import { ColorPalette } from '../../../constant';

const spin = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

interface LoaderProps {
  borderWidth?: number;
  width?: number;
  height?: number;
}

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  border: ${(props: LoaderProps) =>
      props.borderWidth ? props.borderWidth : 6}px
    solid ${ColorPalette.WHITE};
  border-top: ${(props: LoaderProps) =>
      props.borderWidth ? props.borderWidth : 6}px
    solid #3ee0d2;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
  border-top: ${(props: LoaderProps) =>
      props.borderWidth ? props.borderWidth : 6}px
    solid ${ColorPalette.EXPORTER};
  width: ${(props: LoaderProps) => (props.width ? props.width : 50)}px;
  height: ${(props: LoaderProps) => (props.height ? props.height : 50)}px;
`;

export default Loader;
