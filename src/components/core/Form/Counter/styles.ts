import styled from 'styled-components';
import { ColorPalette } from '../../../../constant';

const CounterContainer = styled.div`
  display: flex;
  max-width: 165px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 10px;
  color: rgb(51, 51, 51);
  border: 1px solid ${ColorPalette.MID_GREY};
  outline: 0px;
  width: 100%;
  margin: 0px 5px;
`;

export { Input };

export default CounterContainer;
