import styled from "styled-components";
import NextImage from "next/image";
import { center, dimensions } from "@/utils";

export const Trainer = styled.article`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: end;
	min-height: 47rem;
	flex: 1 1 33%;
	border-radius: var(--small-border-rad);
	box-shadow: var(--shadow);
	color: var(--colw);
	&::before {
		content: "";
		inset: 0;
		border-radius: inherit;
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			359.91deg,
			rgba(54, 54, 54, 0.4) 0.08%,
			rgba(54, 54, 54, 0) 99.93%
		);
		z-index: 2;
	}

	@media (${dimensions.desktop}) {
		min-height: 40rem;
	}
`;

export const Button = styled.button<{ selected: boolean }>`
	position: absolute;
	border: none;
	bottom: 2rem;
	width: 4rem;
	height: 4rem;
	z-index: 8;
	border-radius: 50%;
	align-self: flex-end;
	box-shadow: var(--shadow);
	cursor: pointer;

	transition: all 0.5s ease;

	transform: ${({ selected }) =>
		selected ? "rotate(180deg)" : "rotate(0deg)"};

	${center}
`;

export const MoreInfoContainer = styled.div`
	margin: 1rem 0;
	font-family: var(--font2);
`;

export const TextContainer = styled.div<{ selected: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	font-family: var(--font1);
	z-index: 8;
	padding: 3rem;
	transition: all 0.5s ease;
	border-radius: inherit;

	height: ${({ selected }) => (selected ? "100%" : "auto")};
	background-color: ${({ selected }) =>
		selected ? "var(--colw)" : "transparent"};

	color: ${({ selected }) => (selected ? "var(--colb)" : "inherit")};
	& > h3,
	h4 {
		font-weight: 400;
		letter-spacing: 0.12rem;
		max-width: 18rem;
	}

	h4 {
		color: ${({ selected }) => (selected ? "var(--col2)" : "inherit")};
	}
`;

export const H3 = styled.h3`
	font-size: 3.8rem;
`;
export const H4 = styled.h4`
	font-size: 1.8rem;
`;

export const Image = styled(NextImage)`
	object-fit: cover;
	border-radius: inherit;
`;
