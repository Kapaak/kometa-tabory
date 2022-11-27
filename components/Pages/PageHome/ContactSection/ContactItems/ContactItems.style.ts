//libraries
import styled from "styled-components";
//styles
import { Text as SText } from "@ui-library";

export const Text = styled(SText)``;

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	gap: 2rem 4rem;
`;
