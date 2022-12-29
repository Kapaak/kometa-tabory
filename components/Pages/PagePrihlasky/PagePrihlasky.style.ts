import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const Headline = styled.h1`
	font-family: var(--font1);
	font-weight: 500;
	color: var(--col2);
	font-size: var(--fheadline);

	@media (${dimensions.desktop}) {
		margin-top: 4rem;
	}
`;

export const Subheadline = styled.h2`
	font-family: var(--font1);
	font-weight: 500;
	color: var(--col2);
	font-size: var(--fsheadline);
	margin: 0.5rem 0 6rem;
`;
