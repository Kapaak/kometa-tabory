//libraries
import styled from "styled-components";
//styles
import { SectionElement } from "@/components";
import { Flex as SFlex } from "@ui-library";
import { dimensions } from "@/utils";

export const Flex = styled(SFlex)`
	overflow-y: auto;
`;

export const SponsorSection = styled(SectionElement)`
	padding: 4rem;

	@media (${dimensions.notebook}) {
		height: 25rem;
	}
`;
