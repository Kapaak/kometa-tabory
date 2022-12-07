import { ArrowRight } from "phosphor-react";
import styled from "styled-components";

import { Text as SText } from "@ui-library";

export const Container = styled.div`
	display: grid;
	gap: 4rem;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

export const ArrowRightIcon = styled(ArrowRight)`
	position: absolute;
	right: 0.4rem;
	top: 50%;
	transform: translateY(-50%);
	background-color: var(--col2);
	color: var(--colw);
	border-radius: 50%;
	padding: 0.6rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FormInputContainer = styled.div`
	position: relative;
	input:focus + label {
		opacity: 1;
		transform: translateY(-2rem);
	}
`;

export const Label = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	transition: transform 0.3s ease, opacity 0.2s ease;
	pointer-events: none;
	font-size: 1.3rem;
`;

export const ErrorContainer = styled.div`
	color: var(--colr);
	font-size: 1.2rem;
`;

export const SubmitContainer = styled.div`
	margin-left: auto;
	max-width: 61rem;
	text-align: right;
`;

export const Text = styled(SText)`
	color: var(--colg);
	text-align: inherit;
	font-weight: 500;
	margin: 1rem 0;
`;

export const UnderlinedInput = styled.a`
	color: var(--col2);
	text-decoration: underline;
	text-underline-offset: 0.5rem;
`;
