import { ReactNode, useId } from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';

import { AvailableIcons } from '~/utils';

import { Flex } from '../../atoms';

import * as S from './Accordion.style';

type AccordionItem = {
  // id: string;
  title: string;
  subtitle?: string;
  content?: ReactNode;
  icon?: AvailableIcons;
};

interface AccordionProps {
  accordionItems?: AccordionItem[];
}

export function Accordion({ accordionItems }: AccordionProps) {
  const id = useId();
  return (
    <RadixAccordion.Root type="single" collapsible>
      {accordionItems?.map((accordionItem, index) => (
        <S.AccordionItem
          value={`item-${id}-${index}`}
          key={`item-${id}-${index}`}
        >
          <S.StyledHeader>
            <S.StyledTrigger>
              <Flex>
                <S.Headline variant="dark" bold as="h3">
                  {accordionItem?.title}
                </S.Headline>
                {accordionItem?.subtitle && (
                  <S.Subheadline variant="dark" as="h4">
                    {accordionItem?.subtitle}
                  </S.Subheadline>
                )}
              </Flex>
              <S.ArrowDown size={18} weight="bold" />
            </S.StyledTrigger>
          </S.StyledHeader>

          <S.StyledContent>
            <S.StyledContentText>{accordionItem?.content}</S.StyledContentText>
          </S.StyledContent>
        </S.AccordionItem>
      ))}
    </RadixAccordion.Root>
  );
}
