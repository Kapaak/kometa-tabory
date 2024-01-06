import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as S from './Button.style';

export type ButtonVariant = 'plain' | 'bordered' | 'filled';
export type ButtonSize = 'small' | 'regular';
export type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button = ({
  children,
  isLoading,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <S.Button isLoading={isLoading} {...rest}>
      {!isLoading && children}
      {isLoading && <S.LoadingIcon size={32} />}
    </S.Button>
  );
};
