import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './Button.styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  backgroundType?: 'primary' | 'secondary';
};

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return <S.Button {...rest}>{children}</S.Button>;
}
