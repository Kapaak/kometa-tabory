import { Button as SButton } from "../Button/Button.style";
import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const Button = styled(SButton)`
	@media (${dimensions.tablet}) {
		margin-left: auto;
	}
`;
