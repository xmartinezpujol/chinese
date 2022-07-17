import styled from 'styled-components';

export type StyledButtonProps = {
  onClick?: (e: any) => void;
  disabled?: boolean;
  radius?: string;
  padding?: string;
  textColor?: string;
  textHoverColor?: string;
  backgroundColor?: string;
  backgroundHoverColor?: string;
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 46px;
  font-size: 16px;
  border: 0;
  padding: ${(props: StyledButtonProps) => props.padding};
  background-color: ${(props: StyledButtonProps) => props.backgroundColor};
  color: ${(props: StyledButtonProps) => props.textColor};
  border-radius: ${(props: StyledButtonProps) =>
    props.radius ? props.radius : '10px'};
  outline: 0;
  transition: 0.4s easy-in;
  :hover {
    cursor: pointer;
    color: ${(props: StyledButtonProps) => props.textHoverColor};
    background-color: ${(props: StyledButtonProps) =>
      props.backgroundHoverColor};
  }
`;
