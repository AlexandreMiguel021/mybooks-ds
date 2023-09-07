import styled, { RuleSet, css } from 'styled-components';
import { ButtonProps } from './Button.component';

const buttonModifiers: Record<
  ButtonProps['backgroundType'] & {},
  () => RuleSet
> = {
  primary: () => css`
    border: 2px solid #eb9b00;
    color: white;
    background-color: #e89b00;
  `,

  secondary: () => css`
    border: 2px solid #eb9b00;
    color: #e89b00;
    background-color: white;
  `,
};

export const Button = styled.button<ButtonProps>`
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  
  ${({ backgroundType = 'primary' }) => buttonModifiers[backgroundType]}

  &:hover {
    opacity: .8;
  }

  &:focus {
    outline-color: #bb7900;
  }
`;
