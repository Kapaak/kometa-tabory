import { SectionElement } from "components/Shared";
import styled from "styled-components";

export const VideoWrapper = styled.div`
  overflow: hidden;
  & > div {
    margin-bottom: -1rem;
  }
`;

export const Video = styled(SectionElement)`
  padding: 8rem 0;
`;
