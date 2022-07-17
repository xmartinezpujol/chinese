import * as React from 'react';
import { StyledButton, StyledButtonProps } from './style';

export interface ButtonProps extends StyledButtonProps {
  style?: React.CSSProperties;
  className?: any;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <StyledButton {...props} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
