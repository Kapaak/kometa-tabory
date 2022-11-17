//libraries
import styled, { css } from "styled-components";
//styles
import { dimensions } from "@/utils";

export const NavLinks = styled.ul<{ isActive: boolean }>`
	flex-direction: column;

	${({ isActive }) => {
		switch (isActive) {
			case true:
				return css`
					display: flex;
					align-self: center;
				`;
			case false:
				return css`
					display: none;
					align-self: baseline;
				`;
			default:
				return css``;
		}
	}}

	@media(${dimensions.notebook}) {
		display: flex;
		flex-direction: row;
		gap: 4rem;
		height: 100%;
		align-items: center;
		padding: 1rem 0rem;
	}
`;
