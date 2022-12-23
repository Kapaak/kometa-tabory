import { Button as SButton } from "@ui-library";
import styled from "styled-components";

export const Button = styled(SButton)`
	svg {
		position: absolute;
		right: 0.4rem;
		top: 50%;
		transform: translateY(-50%);
		background-color: var(--col2);
		color: var(--colw);
		border-radius: 50%;
		padding: 0.6rem;
	}
`;
