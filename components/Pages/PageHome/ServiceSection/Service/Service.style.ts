//libraries
import styled from "styled-components";
import NextImage from "next/image";
//styles
import { dimensions } from "@/utils";
import { Subheadline as SSubheadline, Text } from "@ui-library";
import { motion } from "framer-motion";
import Link from "next/link";

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

export const Image = styled(NextImage)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

//todo tohle pak pouzij jako link
// export const A = styled(Link)`
export const Button = styled.button`
	//todo uprav jestli ty styly jsou vsecchny potreba
	display: inline-block;
	border-radius: 2.4rem;
	text-transform: inherit;
	font-family: inherit;
	font-size: var(--fbutton);
	padding: inherit;
	letter-spacing: inherit;
	transition: all 0.2s ease;
	cursor: pointer;
	align-self: end;
	padding: 1rem 2rem;
	margin-top: auto;

	color: var(--col2);
	border: 2px solid var(--col2);

	&:hover {
		transition: all 0.35s ease;
		background-color: var(--col2);
		color: var(--colw);
	}
`;

export const A = styled(Link)`
	//todo uprav jestli ty styly jsou vsecchny potreba
	display: inline-block;
	border-radius: 2.4rem;
	text-transform: inherit;
	font-family: inherit;
	font-size: var(--fbutton);
	padding: inherit;
	letter-spacing: inherit;
	transition: all 0.2s ease;
	cursor: pointer;
	align-self: end;
	padding: 1rem 2rem;
	margin-top: auto;

	color: var(--col2);
	border: 2px solid var(--col2);

	&:hover {
		transition: all 0.35s ease;
		background-color: var(--col2);
		color: var(--colw);
	}
`;
