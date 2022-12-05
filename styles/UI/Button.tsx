import styled from "styled-components";

export const Button = styled.button`
	position: relative;
	border: 2px solid var(--col2);
	text-transform: uppercase;
	font-family: var(--font1);
	color: var(--col2);
	padding: 1.4rem 5rem 1rem 2rem;
	background-color: transparent;
	cursor: pointer;
	border-radius: 2.4rem;
	font-size: var(--fbutton);
	overflow: hidden;
	//prepis at je to vkladatelny
	margin-left: auto;
	//variant specific
	transition: transform 0.3s ease;
	&:hover {
		color: var(--colw);
	}
	&:hover svg {
		transition: transform 0.5s ease;
		transform: scale(6.5);
		color: var(--col2);
		z-index: -1;
	}
	//button by asi mel byt ve shared a component
`;
