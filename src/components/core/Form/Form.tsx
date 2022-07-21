import * as React from 'react';
import { StyledForm } from './style';

const Form = ({ ...props }) => {
  const { children, ...rest } = props;

  return <StyledForm {...rest}>{children}</StyledForm>;
};

export default Form;
