//components
import { MaxWidth, Text, Headline } from "~/ui/components";

import { Document } from "./Document";
//styles
import { data } from "./DocumentSection.data";
import * as S from "./DocumentSection.style";
//data

export const DocumentSection = () => {
  return (
    <S.DocumentSection name="documents">
      <MaxWidth>
        <S.FlexContainer justify="space-between" gap="2rem">
          <S.TextContainer>
            <Headline>Dokumenty</Headline>
            <Text variant="dark">
              Důležité dokumenty pro stáhnutí ve formě PDF.
            </Text>
          </S.TextContainer>
          <S.GridContainer>
            {data.map((d) => (
              <Document key={d?.id} title={d?.title} filePath={d?.filePath} />
            ))}
          </S.GridContainer>
        </S.FlexContainer>
      </MaxWidth>
    </S.DocumentSection>
  );
};
