import { Trash } from "phosphor-react";
import styled from "styled-components";
import { center } from "utils/mixins";

export const ChildItem = styled.button<{ selected: boolean }>`
	${center}
	gap: 3rem;
	padding: 0.6rem 1.3rem;
	border: none;
	border-radius: inherit;
	background-color: ${({ selected }) =>
		selected ? "var(--collg)" : "transparent"};
	cursor: pointer;
	font-family: var(--font-1);
	max-width: 15rem;
	width: 15rem;
`;

export const TrashIcon = styled(Trash)<{ $selected: boolean }>`
	visibility: ${({ $selected }) => ($selected ? "visible" : "hidden")};
	pointer-events: ${({ $selected }) => ($selected ? "all" : "none")};

	&:hover {
		color: var(--colr);
	}
`;
