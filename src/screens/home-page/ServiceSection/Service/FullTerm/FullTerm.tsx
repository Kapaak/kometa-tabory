import { Warning } from "phosphor-react";

import * as S from "./FullTerm.style";

export const FullTerm = () => {
  return (
    <S.FullContainer>
      <S.Flex>
        <Warning size={40} color="var(--col1)" />
        <S.FullText>tento termín je již zaplněný</S.FullText>
      </S.Flex>
    </S.FullContainer>
  );
};
