import * as React from 'react';
import { StyledLabel } from './style';

const Label = ({ ...props }) => {
  const { children, ...rest } = props;

  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
