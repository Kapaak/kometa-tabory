import styled, { css } from "styled-components";
import NextImage from "next/image";
import { dimensions } from "utils/breakpoints";

export const PhotoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-template-rows: repeat(4, 20rem);
	grid-gap: 1rem;
	margin-top: 3rem;

	@media (${dimensions.desktop}) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

type ImageContainerProps = {
	colStart: number;
	colEnd: number;
	rowStart: number;
	rowEnd: number;
};

export const ImageContainer = styled.div<ImageContainerProps>`
	position: relative;

	${({ colStart, colEnd, rowStart, rowEnd }) => css`
		grid-column: ${colStart} ${colEnd};
		grid-row: ${rowStart} ${rowEnd};
		/* grid-column-start: ${colStart ?? "unset"};
		grid-column-end: ${colEnd ?? "unset"};
		grid-row-start: ${rowStart ?? "unset"};
		grid-row-end: ${rowEnd ?? "unset"}; */
	`}

	@media(${dimensions.desktop}) {
		${({ colStart, colEnd, rowStart, rowEnd }) => css`
			grid-column: ${colStart} / ${colEnd};
			grid-row: ${rowStart} / ${rowEnd};
		`}
	}
`;

export const Image = styled(NextImage)`
	object-fit: cover;
	cursor: pointer;
`;
