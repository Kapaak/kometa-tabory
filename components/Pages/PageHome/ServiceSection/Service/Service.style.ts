//libraries
import styled from "styled-components";
import NextImage from "next/image";
//styles
import { dimensions } from "@/utils";
import { A as SA, Subheadline as SSubheadline } from "@ui-library";
import { motion } from "framer-motion";

export const ImageContainer = styled(motion.div)`
	position: relative;
	height: 50%;
	overflow: hidden;
`;

export const Subheadline = styled(SSubheadline)`
	margin-bottom: 0;
`;

export const Service = styled(motion.article)`
	display: flex;
	flex-direction: column;
	height: 48rem;
	border-radius: var(--small-border-rad);
	box-shadow: var(--shadow);
	font-family: var(--font1);
	overflow: hidden;

	ul {
		display: none;
	}
`;

export const LineThroughText = styled.span`
	text-decoration: line-through 0.2rem;
`;

export const ServiceItems = styled(motion.ul)`
	margin: 1rem 0 0 1rem;
	gap: 1rem;
	font-family: var(--font2);
`;

export const ServiceItem = styled.li<{ bold?: boolean }>`
	list-style-type: none;
	display: flex;
	gap: 1rem;
	align-items: center;
	font-weight: ${({ bold }) => (bold ? 400 : 300)};
`;

export const Container = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 3rem;
	flex: 1;

	@media (${dimensions.tablet}) {
		padding: 3rem 4rem;
	}

	@media (${dimensions.notebook}) {
		padding: 3rem;
	}
`;

export const Label = styled(motion.span)`
	position: absolute;
	top: -5rem;
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
	margin-top: auto;
`;
