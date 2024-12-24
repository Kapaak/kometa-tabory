import styled from "styled-components";

import { Text as SText } from "~/ui/components";

export const Text = styled(SText)`
  /* max-width: 45rem; */
  margin: 0 auto;
`;

export const AuthorContainer = styled.div`
  margin-top: 8rem;
`;

export const TestimonialItem = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

export const TestimonialWrapper = styled.div`
  max-width: 45rem;
  user-select: none;
`;
