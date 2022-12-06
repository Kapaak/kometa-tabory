import { Flex, MaxWidth, Text } from "@ui-library";
import { Headline } from "components/Shared";
import * as S from "./DocumentSection.style";
import { Document } from "./Document";

export const DocumentSection = () => {
	return (
		<S.DocumentSection name="documents">
			<MaxWidth>
				<S.FlexContainer justify="space-between" gap="2rem">
					<S.TextContainer>
						<Headline>Dokumenty</Headline>
						<Text variant="dark">
							Důležíté dokumenty pro stáhnutí ve formě PDF.
						</Text>
					</S.TextContainer>
					<S.GridContainer>
						<Document
							title="Základní informace o táboře"
							filePath="/files/VSEOBECNE-PODMINKY.pdf"
						/>
						<Document
							title="Základní informace o táboře"
							filePath="/files/VSEOBECNE-PODMINKY.pdf"
						/>
						<Document
							title="Základní informace o táboře"
							filePath="/files/VSEOBECNE-PODMINKY.pdf"
						/>
						<Document
							title="Základní informace o táboře"
							filePath="/files/VSEOBECNE-PODMINKY.pdf"
						/>
					</S.GridContainer>
				</S.FlexContainer>
			</MaxWidth>
		</S.DocumentSection>
	);
};
