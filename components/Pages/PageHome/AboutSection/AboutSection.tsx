//libraries
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
//images
import Wave from "@/public/icons/wave.svg";
//styles
import * as S from "./AboutSection.style";
//redux
import { toggleShadow } from "@/state";

export const AboutSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.15,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    //this would trigger everytime I enter / leave this element
    //I want a shadow on <Header/> to disappear only on hero page
    //(in default behavior it would disappear after we leave this element)
    //therefore I check if boundingClientRect - visible area of element is above current page or not
    const isCrossingHeroSection =
      entry?.boundingClientRect && entry?.boundingClientRect.top > 0;
    if (isCrossingHeroSection) dispatch(toggleShadow(inView));
  }, [inView]);

  return (
    <S.AboutSection name="about" ref={ref}>
      <S.MaxWidth>
        <S.Image src={Wave} alt="vlnka" />
        <S.AboutText center>
          Naše příměstské tábory jsou tu pro všechny sportovce a dobrodruhy ve
          věku od 4 do 15 let. Plavat budeme 3x týdně pod vedením licencovaných
          trenérů s několikaletou praxí. Ve středu je na programu celodenní
          výlet dle tématu daného týdne. Dále můžete očekávat každodenní
          sportovní aktivity, tématické hry a soutěže. Děti i rodiče od nás
          odchází spokojení, protože se dětem intenzivně věnujeme a to od 7:30
          ráno až do 17:00 odpoledne.
        </S.AboutText>
        <S.Image src={Wave} alt="vlnka" />
      </S.MaxWidth>
    </S.AboutSection>
  );
};
