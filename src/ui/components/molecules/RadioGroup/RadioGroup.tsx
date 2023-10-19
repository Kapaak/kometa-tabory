import { Flex } from "../../atoms";
import React from "react";
import * as S from "./RadioGroup.style";

export type RadioOption = {
  id: string;
  value: string;
  label: string;
};

interface RadioGroupProps {
  radioOptions: RadioOption[];
  onChange: (val: string) => void;
  selectedValue: string;
}

export const RadioGroup = ({
  radioOptions,
  onChange,
  selectedValue,
}: RadioGroupProps) => {
  return (
    <S.RadioGroupRoot
      defaultValue={selectedValue || radioOptions[0]?.value}
      aria-label="View density"
      onValueChange={onChange}
    >
      {radioOptions?.map((radioOption, i) => (
        <Flex align="center" direction="row" key={i}>
          <S.RadioGroupItem value={radioOption?.value} id={radioOption?.id}>
            <S.RadioGroupIndicator />
          </S.RadioGroupItem>
          <S.Label htmlFor={radioOption?.id}>{radioOption?.label}</S.Label>
        </Flex>
      ))}
    </S.RadioGroupRoot>
  );
};
