//libraries
import styled from "styled-components";
import NextImage from "next/image";
//styles
import { dimensions } from "@/utils";
import { A as SA, Flex as SFlex } from "@ui-library";

export const Service = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1 1 30%;
	min-width: 40rem;
	border-radius: var(--small-border-rad);
	box-shadow: var(--shadow);
	font-family: var(--font1);
`;

export const Flex = styled(SFlex)`
	padding: 3rem;
	flex: 1;

	@media (${dimensions.tablet}) {
		padding: 3rem 4rem;
	}

	@media (${dimensions.notebook}) {
		padding: 3rem;
		margin-top: 2rem;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: var(--small-border-rad);
	overflow: hidden;
	flex: 1;
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 18rem;

	@media (${dimensions.notebook}) {
		height: 26rem;
	}
`;

export const Label = styled.span`
	position: absolute;
	bottom: 0;
	left: 2rem;
	transform: translateY(50%);
	padding: 1.4rem 2rem;
	border-radius: 4rem;
	background-color: var(--col1);
`;

export const Image = styled(NextImage)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const A = styled(SA)`
	align-self: end;
	padding: 1rem 2rem;
`;
