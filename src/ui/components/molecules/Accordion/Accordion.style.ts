import { CaretDown } from '@phosphor-icons/react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';

import { Text as SText } from '../../atoms';

export const AccordionItem = styled(RadixAccordion.Item)`
  margin: 1rem 0;
  border-bottom: 1px solid var(--col2);
`;

export const StyledHeader = styled(RadixAccordion.Header)`
  display: flex;
`;

export const StyledTrigger = styled(RadixAccordion.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 1rem 0rem 2rem;
  cursor: pointer;
`;

export const Text = styled(SText)`
  color: var(--colb);
  font-size: 1.6rem;
  font-family: var(--font2);
`;

export const Headline = styled(Text)`
  text-transform: uppercase;
`;

export const Subheadline = styled(Text)``;

export const ArrowDown = styled(CaretDown)`
  transition: all 0.5s ease;
  min-width: 2rem;

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

const slideDown = keyframes`
  from { height: 0 }
  to { height: var(--radix-accordion-content-height) }
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height)}
  to { height: 0 }
`;

export const StyledContent = styled(RadixAccordion.Content)`
  overflow: hidden;
  animation-fill-mode: forwards;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const StyledContentText = styled.div`
  padding: 1.5rem 2rem;
  font-weight: 300;
`;
