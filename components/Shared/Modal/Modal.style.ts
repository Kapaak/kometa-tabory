import { Button, Text } from "@ui-library";
import { ArrowRight } from "phosphor-react";
import styled from "styled-components";

export const Headline = styled(Text)`
	font-family: var(--font1);
	font-size: var(--fsheadline);
	margin-bottom: 2rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
`;

export const LeaveButton = styled(Button)`
	display: flex;
	margin-top: 5rem;
	margin-left: auto;
`;
