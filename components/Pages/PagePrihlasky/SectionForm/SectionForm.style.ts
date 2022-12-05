import { ArrowRight } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 4rem;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
//delete
export const FormInput = styled.input`
	border: none;
	background-color: transparent;
	border-bottom: 1px solid var(--collg);
	padding: 1rem;
	width: 100%;
	font-size: 1.6rem;
`;

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
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
