import styled from 'styled-components';

export const CampsSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !['hasError'].includes(prop),
})<{ hasError?: boolean }>`
  display: grid;
  grid-template-columns: ${({ hasError }) =>
    hasError ? '1fr' : 'repeat(auto-fill, minmax(33rem, 1fr))'};
  gap: 4rem;
`;
