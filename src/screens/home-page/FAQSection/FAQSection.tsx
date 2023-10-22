import { PortableText } from '@portabletext/react';

import { useSanityContext } from '~/contexts';
import {
  Expandable,
  Headline,
  MaxWidth,
  SectionElement,
  Text,
} from '~/ui/components';

import * as S from './FAQSection.style';

export const FAQSection = () => {
  const { faqs } = useSanityContext();
  return (
    <SectionElement name="faq">
      <MaxWidth>
        <Headline>Základní informace</Headline>
        <S.Container>
          {faqs?.map((faq, index) => (
            <S.FAQWrapper key={`${faq?.title}_${index}`}>
              <S.Headline>{faq?.title}</S.Headline>
              {faq?.faqItems?.map((item, i) => {
                return (
                  <Expandable
                    key={`${item?.title}_${i}`}
                    title={item?.title}
                    description={
                      <PortableText
                        value={item?.text}
                        key={index}
                        components={{
                          block: {
                            normal: (props) => {
                              return (
                                <Text variant="dark">{props.children}</Text>
                              );
                            },
                          },

                          listItem: {
                            bullet: (props) => {
                              return (
                                <S.ListItem>
                                  <Text variant="dark">{props.children}</Text>
                                </S.ListItem>
                              );
                            },
                            number: (props) => {
                              return (
                                <S.ListItem>
                                  <Text variant="dark">{props.children}</Text>
                                </S.ListItem>
                              );
                            },
                          },
                        }}
                      />
                    }
                    icon={item?.icon}
                  />
                );
              })}
            </S.FAQWrapper>
          ))}
        </S.Container>
      </MaxWidth>
    </SectionElement>
  );
};
