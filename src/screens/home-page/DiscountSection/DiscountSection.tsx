import BrnoId from '~/public/images/discount/brno-id.svg';
import { Button, Hidden, MaxWidth, Text, VerticalStack } from '~/ui/components';

import * as S from './DiscountSection.style';

interface DiscountSectionProps {}

export function DiscountSection({}: DiscountSectionProps) {
  return (
    <S.DiscountSection>
      <MaxWidth>
        <S.DiscountContainer>
          <VerticalStack align="start" gap="2rem">
            <S.DiscountHeadline>
              Získejte slevu na dětské tábory
            </S.DiscountHeadline>
            <Text>
              BrnoID přichází s jedinečnou příležitostí pro rodiče! Pokud je
              vaše dítě z Brna, můžete využít speciálního voucheru na dětské
              tábory a ušetřit při rezervaci. Nechte své děti zažít letošní léto
              plné zábavy, přátel a nových dovedností za skvělou cenu.
            </Text>
            <Button>Využít slevu</Button>
          </VerticalStack>
          <Hidden down="tabletX">
            <S.BrnoIdImage src={BrnoId} alt="BrnoId sleva." quality={100} />
          </Hidden>
        </S.DiscountContainer>
      </MaxWidth>
    </S.DiscountSection>
  );
}
