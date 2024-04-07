//libraries
import styled from 'styled-components';

//styles
import { Flex as SFlex, SectionElement } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const Flex = styled(SFlex)`
  @media (${dimensions.notebook}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
  gap: 4rem;
`;

export const ServiceSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;

export const UnderlinedLink = styled.a`
  text-decoration: underline;
  color: inherit;
`;
