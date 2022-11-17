//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils";

export const Dropdown = styled.div`
	display: none;
	flex-direction: column;
	left: 50%;
	align-items: center;
	justify-content: flex-start;
	padding: 0 2rem;

	@media (${dimensions.desktop}) {
		position: absolute;
		transform: translateX(-50%);
		background-color: var(--colw);
	}
`;

export const NavLink = styled.li`
	position: relative;
	list-style-type: none;
	text-decoration: none;
	color: var(--colw);
	font-family: var(--font1);
	font-size: var(--fnavlink);
	line-height: 2.4;
	cursor: pointer;
	padding-left: 4rem;

	a {
		&:hover {
			color: var(--col1);
		}
	}

	@media (${dimensions.notebook}) {
		padding-left: 0;

		a {
			color: var(--colb);
		}
	}

	&:hover {
		${Dropdown} {
			display: flex;
		}
	}
`;
