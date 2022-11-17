import styled, { css } from "styled-components";

export interface TextProps {
	center?: boolean;
	bold?: boolean;
	variant?: "light" | "dark" | "normal" | "grey";
}

export const Text = styled.p<TextProps>`
	font-size: var(--ftext);
	line-height: 1.9;

	${({ variant }) => {
		switch (variant) {
			case "light":
				return css`
					color: var(--colw);
				`;

			case "dark":
				return css`
					color: var(--colb);
				`;

			case "grey":
				return css`
					color: var(--colg);
					letter-spacing: 0.08rem;
				`;

			case "normal":
				return css`
					color: var(--col2);
				`;

			default:
				return css`
					color: var(--col2);
				`;
		}
	}}
	font-weight: ${({ bold }) => (bold ? "500" : "300")};
	text-align: ${({ center }) => (center ? "center" : "left")};
`;
