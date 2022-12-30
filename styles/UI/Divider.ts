import styled from "styled-components";

export const Divider = styled.div<{ width?: string }>`
  height: 0.1rem;
  background-color: var(--collg);
  margin: 1rem 0;
  width: ${({ width }) => width ?? "100%"};
`;
