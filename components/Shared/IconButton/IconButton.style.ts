import { Button } from "../Button/Button.style";
import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const IconButton = styled(Button)`
	padding: 1rem 5rem 1rem 2rem;
	svg {
		background-color: ${({ disabled }) => disabled && "transparent"};
	}

	@media (${dimensions.tablet}) {
		margin-left: auto;
	}
`;
