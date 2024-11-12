import styled from 'styled-components';

export const CampCardListItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !['bold'].includes(prop),
})<{ bold?: boolean }>`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
