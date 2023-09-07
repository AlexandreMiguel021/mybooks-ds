import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return <S.Button {...rest}>{children}</S.Button>;
}
