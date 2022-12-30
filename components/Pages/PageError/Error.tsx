//libraries
import Link from "next/link";
//components
import { MaxHeight } from "@/components";
//styles
import { MainSubheadline, A, Flex, MaxWidth } from "@ui-library";
import * as S from "./Error.style";

export const Error = () => {
	return (
		<div>
			<MaxHeight>
				<MaxWidth>
					<Flex justify="center" align="center" gap="2rem" textAlign="center">
						<S.MainHeadline>ups, vedle!</S.MainHeadline>
						<MainSubheadline>
							je nam to líto, stránka kterou hledáte není k dispozici
						</MainSubheadline>
						<S.Link href="/" passHref>
							zpět na hlavní stránku
						</S.Link>
					</Flex>
				</MaxWidth>
			</MaxHeight>
		</div>
	);
};
