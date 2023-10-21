import { useSanityContext } from '~/contexts';
import { Headline, MaxWidth, Text } from '~/ui/components';

import { Document } from './Document';
import * as S from './DocumentSection.style';

export const DocumentSection = () => {
  const { documents } = useSanityContext();
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
            {documents?.map((doc, index) => (
              <Document
                key={`${doc?.title}_${index}`}
                title={doc?.title}
                filePath={doc?.file?.asset?.url}
              />
            ))}
          </S.GridContainer>
        </S.FlexContainer>
      </MaxWidth>
    </S.DocumentSection>
  );
};
