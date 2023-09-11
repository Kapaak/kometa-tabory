//styles
import { MaxHeight } from "@/components";
import { MainHeadline, MainSubheadline } from "@ui-library";
import * as S from "./HeroSection.style";
//images
import HeroImage from "@/public/images/hero-img.jpg";
//others
import { scrollTo } from "@/utils";

export const HeroSection = () => {
  return (
    <S.HeroSection name="home">
      <MaxHeight $gradient={true}>
        <S.MaxWidth>
          <S.FlexWrapper justify="flex-end" gap="1rem" align="flex-start">
            <div>
              <MainHeadline>Tábory riviéra</MainHeadline>
              <MainSubheadline>Plavecká škola kometa</MainSubheadline>
            </div>
            <div>
              <S.TextContainer variant="light" bold>
                Přijďte si s námi užít spoustu zábavy na sportovních
                příměstských táborech! <br /> Pro děti od 4 do 15 let.
              </S.TextContainer>
            </div>
            <S.LightButton
              variant="filled"
              color="secondary"
              onClick={() => scrollTo("services")}
            >
              Dostupné tábory
            </S.LightButton>
          </S.FlexWrapper>
        </S.MaxWidth>
        <S.ImageContainer>
          <S.Image
            src={HeroImage}
            placeholder="blur"
            priority={true}
            alt="děti na bazéně v Brně s potápěčskými brýlemi"
          />
        </S.ImageContainer>
      </MaxHeight>
    </S.HeroSection>
  );
};
