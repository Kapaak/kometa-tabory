import { Flex } from "@ui-library";
import styled from "styled-components";
import { dimensions } from "utils/breakpoints";
import { center } from "utils/mixins";

export const Button = styled.button`
	border: none;
	background-color: transparent;

	cursor: pointer;
	font-family: var(--font-1);

	${center}
	gap: 1rem;

	@media (${dimensions.notebook}) {
		margin-left: auto;
	}
`;

export const ChildContainer = styled(Flex)`
	flex: 0;
	border-radius: 3rem;

	@media (${dimensions.notebook}) {
		flex-direction: row;
		border: 1px solid var(--collg);
	}
`;

export const ChildrenList = styled(Flex)`
	max-width: 100rem;
	margin: 4rem 0 6rem;
	align-items: flex-start;
	gap: 1rem;

	@media (${dimensions.notebook}) {
		align-items: center;
		flex-direction: row-reverse;
	}
`;
