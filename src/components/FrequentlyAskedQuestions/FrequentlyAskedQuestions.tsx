import { SanityFaq } from '~/domains';
import { Accordion, TextBuilder } from '~/ui/components';

import * as S from './FrequentlyAskedQuestions.style';

interface FrequentlyAskedQuestionsProps {
  frequentlyAskedQuestions?: SanityFaq[];
}

export const FrequentlyAskedQuestions = ({
  frequentlyAskedQuestions,
}: FrequentlyAskedQuestionsProps) => {
  return (
    <S.Container>
      {frequentlyAskedQuestions?.map((faq, index) => {
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
  );
};
