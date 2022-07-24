import styled from 'styled-components';
import { ColorPalette } from '../../../constant';
import FlexContainer, { ExtendableFlexContainer } from '../FlexContainer';

export const StyledFormField = styled(ExtendableFlexContainer({ fluid: true }))`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.color};
  font-size: 16px;
  line-height: 1.7;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  color: rgb(51, 51, 51);
  border: 1px solid ${ColorPalette.MID_GREY};
  outline: 0;
`;

export const StyledSwitch = styled(FlexContainer)`
  & input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label {
      background: ${ColorPalette.GREEN};

      &:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }
    }
  }

  & label {
    cursor: pointer;
    text-indent: -9999px;
    width: 3rem;
    height: 1.5rem;
    background: ${ColorPalette.DARK_GREY};
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(1.5rem - 4px);
      height: calc(1.5rem - 4px);
      background: #fff;
      border-radius: 90px;
      transition: 0.3s;
    }

    &:active:after {
      width: 1.5rem;
    }
  }
`;

export const StyledForm = styled.form`
  color: ${ColorPalette.BLACK};
`;
