import * as React from 'react';
import styled from 'styled-components';

type FlexContainerProps = {
  direction?: string;
  align?: string;
  justify?: string;
  grow?: string;
  fluid?: boolean;
  disabled?: boolean;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  ref?: any;
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props: FlexContainerProps) => props.direction};
  align-items: ${(props: FlexContainerProps) => props.align};
  justify-content: ${(props: FlexContainerProps) => props.justify};
  flex-grow: ${(props: FlexContainerProps) => props.grow};
  margin: ${(props: FlexContainerProps) => props.margin};
  width: ${(props) => (props.fluid ? '100%' : props.width)};
  height: ${(props) => (props.fluid ? '100%' : props.height)};
  padding: ${(props: FlexContainerProps) => props.padding};
  ${(props) =>
    props.disabled
      ? `
        pointer-events: none;
        opacity: .5;
      `
      : ''}
`;

export const ExtendableFlexContainer =
  // eslint-disable-next-line react/display-name
  (props: FlexContainerProps) => (rest: any) =>
    <FlexContainer {...props} {...rest} />;

export default FlexContainer;
