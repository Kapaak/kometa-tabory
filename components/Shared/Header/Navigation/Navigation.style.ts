//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils";
import { Flex as SFlex } from "@ui-library";

export const Navigation = styled.nav<{ isActive: boolean }>`
	position: ${({ isActive }) => (isActive ? "fixed" : "absolute")};
	width: 100%;
	height: ${({ isActive }) => (isActive ? "100vh" : "auto")};
	background-color: ${({ isActive }) => (isActive ? "var(--col2)" : "unset")};
	z-index: 9;
	top: 0;
	transition: all 0.4 ease;

	@media (${dimensions.notebook}) {
		position: relative;
		height: auto;
		background-color: unset;
	}
`;

export const Flex = styled(SFlex)`
	@media (${dimensions.notebook}) {
		justify-content: flex-end;
		height: 100px;
	}
`;
