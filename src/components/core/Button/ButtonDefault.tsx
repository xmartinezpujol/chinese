import * as React from 'react';
import { ColorPalette } from '../../../constant';
import Button, { ButtonProps } from './Button';

interface ButtonDefaultProps extends ButtonProps {
  inverted?: boolean;
  className?: any;
  children: any;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  children,
  inverted = false,
  radius,
  className,
  ...rest
}) => {
  return (
    <Button
      radius={radius ? radius : '100px'}
      padding="10px 50px"
      textColor={ColorPalette.WHITE}
      backgroundColor={
        inverted ? ColorPalette.DARK_GREY : ColorPalette.DARK_BLUE
      }
      backgroundHoverColor={
        inverted ? ColorPalette.DARK_BLUE : ColorPalette.DARK_GREY
      }
      {...rest}
      className={className}
    >
      {children}
    </Button>
  );
};

export default ButtonDefault;
