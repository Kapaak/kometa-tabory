import { useSanityContext } from '~/contexts';
import {
  Accordion,
  Headline,
  MaxWidth,
  SectionElement,
  TextBuilder,
} from '~/ui/components';

import * as S from './FAQSection.style';

export const FAQSection = () => {
  const { faqs } = useSanityContext();
  return (
    <SectionElement name="faq">
      <MaxWidth>
        <Headline>Základní informace</Headline>
        <S.Container>
          {faqs?.map((faq, index) => {
            const accordionItems = faq?.faqItems?.map((faqItem) => {
              return {
                title: faqItem?.title,
                icon: faqItem?.icon,
                content: (
                  <TextBuilder
                    value={faqItem?.text}
                    options={{ paragraph: { color: 'dark' } }}
                  />
                ),
              };
            });
            return (
              <S.FAQWrapper key={`${faq?.title}_${index}`}>
                <S.Headline>{faq?.title}</S.Headline>
                <Accordion accordionItems={accordionItems} />
              </S.FAQWrapper>
            );
          })}
        </S.Container>
      </MaxWidth>
    </SectionElement>
  );
};
