import { SectionElement } from "components/Shared";
import styled from "styled-components";

export const VideoWrapper = styled.div`
	border-radius: 2rem;
	overflow: hidden;
	& > div {
		margin-bottom: -1rem;
	}
`;

export const Video = styled(SectionElement)`
	padding: 8rem 0;
	background: linear-gradient(
		266.41deg,
		rgba(33, 114, 221, 0.2) -2.58%,
		rgba(33, 114, 221, 0.04) -2.57%,
		rgba(115, 240, 192, 0.2) 100.35%
	);
`;
