import { PropsWithChildren } from "react";

import { Icon as TIcon } from "phosphor-react";

import * as S from "./IconButton.style";
import { ButtonProps } from "../Button";
import { LoadingIcon } from "../Button/Button.style";

interface IconButtonProps extends ButtonProps {
  iconBefore?: TIcon;
  iconAfter?: TIcon;
}

export const IconButton = ({
  children,
  iconBefore,
  iconAfter,
  isLoading,
  disabled,
  ...rest
}: PropsWithChildren<IconButtonProps>) => {
  const IconBefore = iconBefore as TIcon;
  const IconAfter = iconAfter as TIcon;
  return (
    <S.IconButton {...rest} disabled={disabled} isLoading={isLoading}>
      {!isLoading && !disabled && iconBefore && (
        <IconBefore size={38} weight="regular" />
      )}
      {!isLoading && children}
      {!isLoading && !disabled && iconAfter && (
        <IconAfter size={38} weight="regular" />
      )}

      {isLoading && (
        <span>
          odesílám ... <LoadingIcon size={38} weight="fill" />
        </span>
      )}
    </S.IconButton>
  );
};
