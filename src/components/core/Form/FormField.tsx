import * as React from 'react';
import { StyledFormField } from './style';

const FormField = ({ ...props }) => {
  const { children, ...rest } = props;

  return <StyledFormField {...rest}>{children}</StyledFormField>;
};

export default FormField;
