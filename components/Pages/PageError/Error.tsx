//components
import { MaxHeight } from "@/components";
//styles
import { MainSubheadline, Flex, MaxWidth } from "@ui-library";
import * as S from "./Error.style";

export const Error = () => {
	return (
		<div>
			<MaxHeight>
				<MaxWidth>
					<Flex justify="center" align="center" gap="2rem" textAlign="center">
						<S.MainHeadline>ups, vedle!</S.MainHeadline>
						<MainSubheadline>
							je nám to líto, stránka kterou hledáte není k dispozici
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
