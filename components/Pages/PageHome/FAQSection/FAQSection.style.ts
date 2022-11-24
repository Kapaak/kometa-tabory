import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const Headline = styled.h3`
	font-family: var(--font1);
	font-weight: 500;
	letter-spacing: 0.15rem;
	color: var(--col2);
	font-size: 2.5rem;
`;

export const FAQWrapper = styled.div`
	margin: 5rem 0;
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	gap: 4rem;
`;
