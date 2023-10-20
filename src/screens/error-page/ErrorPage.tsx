//components
//styles
import { MainSubheadline, Flex, MaxWidth, MaxHeight } from "~/ui/components";

import * as S from "./ErrorPage.style";

export function ErrorPageScreen() {
  return (
    <div>
      <MaxHeight>
        <MaxWidth>
          <Flex justify="center" align="center" gap="2rem" textAlign="center">
            <S.MainHeadline>ups, vedle!</S.MainHeadline>
            <MainSubheadline>
              je nám to líto, stránka kterou hledáte není k dispozici
            </MainSubheadline>
            <S.Link href="/" passHref>
              zpět na hlavní stránku
            </S.Link>
          </Flex>
        </MaxWidth>
      </MaxHeight>
    </div>
  );
}
