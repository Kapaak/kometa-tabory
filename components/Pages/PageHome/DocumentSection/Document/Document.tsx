import { Flex } from "@ui-library";
import { FileArrowDown } from "phosphor-react";
import * as S from "./Document.style";

interface DocumentProps {
	title: string;
	filePath: string;
}

export const Document = ({ title, filePath }: DocumentProps) => {
	return (
		<S.Document>
			<Flex direction="row" align="center" gap="1rem" justify="space-between">
				<S.H4>{title}</S.H4>
				<a href={filePath} target="_blank" rel="noopener noreferrer" download>
					<FileArrowDown size={30} weight="light" />
				</a>
			</Flex>
		</S.Document>
	);
};
