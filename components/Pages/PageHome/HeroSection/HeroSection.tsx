//libraries
import Image from "next/image";
//styles
import { MaxHeight } from "@/components";
import { MainHeadline, MainSubheadline } from "@ui-library";
import * as S from "./HeroSection.style";
//images
import HeroImage from "@/public/images/hero-img.jpg";
import Arrow from "@/public/icons/arrow.svg";
//others
import { scrollTo } from "@/utils";

export const HeroSection = () => {
	return (
		<S.HeroSection name="home">
			<MaxHeight $gradient={true}>
				<S.MaxWidth>
					<S.FlexWrapper
						align="center"
						justify="flex-end"
						textAlign="center"
						gap="2rem"
					>
						<div>
							<MainHeadline>
								Plavecká škola{" "}
								<S.EmphasizedHeadline>kometa</S.EmphasizedHeadline>
							</MainHeadline>
							<MainSubheadline>Tábory Riviéra</MainSubheadline>
						</div>
						<div>
							<S.TextContainer variant="light" center bold>
								Přijďte si s námi užít spoustu zábavy na sportovních
								příměstských táborech!
							</S.TextContainer>
						</div>
					</S.FlexWrapper>
				</S.MaxWidth>
				<S.ImageContainer>
					<S.Image
						src={HeroImage}
						placeholder="blur"
						priority={true}
						alt="děti na bazéně v Brně soutěžící proti sobě"
					/>
				</S.ImageContainer>
				<S.ArrowButton
					onClick={() => scrollTo("about")}
					aria-label="šipka která naviguje na sekci o nás"
				>
					<Image src={Arrow} alt="šipka" />
				</S.ArrowButton>
			</MaxHeight>
		</S.HeroSection>
	);
};
