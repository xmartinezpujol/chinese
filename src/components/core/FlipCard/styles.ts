import styled from 'styled-components';
import FlexContainer from '../FlexContainer';
import { ColorPalette } from '../../../constant';

const FlipCardOuter = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  &.focus-trigger:focus {
    outline: 5px solid greenyellow;
    outline-offset: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FlipCardInner = styled(FlexContainer)`
  transform-style: preserve-3d;
  transition: 0.3s linear 0.1s;
  position: relative;
  width: inherit;
  height: inherit;

  &.hover-trigger:hover {
    transform: rotateY(180deg);
  }

  &.show-back {
    transform: rotateY(180deg);
  }
`;

const Card = styled(FlexContainer)`
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

    &.front {
        transform: rotateY(0);
      }

    &.back {
        transform: rotateY(180deg);
      }
    }
  `;

export { FlipCardInner, Card };

export default FlipCardOuter;
