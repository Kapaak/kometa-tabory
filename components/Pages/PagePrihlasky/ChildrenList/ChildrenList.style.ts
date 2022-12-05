import { Flex } from "@ui-library";
import styled from "styled-components";
import { center } from "utils/mixins";

export const Button = styled.button`
	border: none;
	background-color: transparent;
	margin-left: auto;
	cursor: pointer;
	font-family: var(--font-1);

	${center}
	gap: 1rem;
`;

export const ChildContainer = styled(Flex)`
	border: 1px solid var(--collg);
	flex: 0;
	border-radius: 3rem;
`;

export const ChildrenList = styled(Flex)`
	max-width: 100rem;
	margin: 4rem 0 6rem;
`;
