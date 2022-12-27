import { keyframes } from "styled-components";
import styled from "styled-components";
import { CircleNotch } from "phosphor-react";

export const Button = styled.button<{ disabled?: boolean }>`
	display: flex;
	position: relative;
	border: 2px solid var(--col2);
	text-transform: uppercase;
	font-family: var(--font1);
	color: var(--col2);
	padding: 1rem 5rem 1rem 2rem;
	background-color: transparent;
	cursor: pointer;
	border-radius: 2.4rem;
	font-size: var(--fbutton);
	overflow: hidden;
	margin-left: auto;

	transition: all 0.3s ease;

	&:hover {
		color: var(--colw);
		background-color: var(--col2);
		transition: all 0.3s ease;
	}

	background-color: ${({ disabled }) => disabled && "transparent"};
	border-color: ${({ disabled }) => disabled && "var(--collg)"};
	color: ${({ disabled }) => disabled && "var(--colg)"};
	pointer-events: ${({ disabled }) => disabled && "none"};

	svg {
		background-color: ${({ disabled }) => disabled && "transparent"};
	}
`;

const rollingKeyframe = keyframes`
  to {
    transform:translateY(-50%) rotate(360deg);
  }
`;

export const LoadingIcon = styled(CircleNotch)`
	position: absolute;
	right: 0.4rem;
	top: 50%;
	color: var(--colg);
	border-radius: 50%;
	padding: 0.6rem;
	transform: translateY(-50%) rotate(0deg);
	animation: ${rollingKeyframe} 1.2s linear infinite;
`;
