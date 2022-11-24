import styled, { css } from "styled-components";

interface Props {
	variant?: "yellow" | "transparent-blue" | "transparent-yellow" | "disabled";
}

export const A = styled.a<Props>`
	display: inline-block;
	border-radius: 2.4rem;
	text-transform: inherit;
	font-family: inherit;
	font-size: var(--fbutton);
	padding: inherit;
	letter-spacing: inherit;
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		transition: all 0.35s ease;
	}

	${({ variant }) => {
		switch (variant) {
			case "yellow":
				return css`
					background-color: var(--col1);
					color: var(--col2);
				`;
			case "transparent-blue":
				return css`
					color: var(--col2);
					border: 2px solid var(--col2);

					&:hover {
						background-color: var(--col2);
						color: var(--colw);
					}
				`;

			case "transparent-yellow":
				return css`
					color: var(--colw);
					border: 2px solid var(--col1);
				`;
			case "disabled":
				return css`
					pointer-events: none;
					cursor: not-allowed;
					border: 2px solid #ababab;
					color: #ababab;
				`;
		}
	}}
`;
