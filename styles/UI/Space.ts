import { dimensions } from "@/utils";
import styled from "styled-components";

interface Props {
	half?: boolean;
}

export const Space = styled.div<Props>`
	padding: ${({ half }) => (half ? "calc(2rem / 2)" : "2rem 0")};

	@media (${dimensions.desktop}) {
		padding: ${({ half }) => (half ? "calc(5rem / 2)" : "5rem 0")};
	}
`;
