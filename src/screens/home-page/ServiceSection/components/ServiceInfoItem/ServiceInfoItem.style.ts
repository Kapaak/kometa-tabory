import styled from 'styled-components';

export const ServiceItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !['bold'].includes(prop),
})<{ bold?: boolean }>`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  span {
    font-weight: ${({ bold }) => (bold ? 400 : 300)};
  }
`;
