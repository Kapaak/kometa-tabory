import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	//auto-fill by tam nechaval misto a nevyplnoval ten zbytek
	grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
	gap: 4rem;
`;
