//libraries
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

//images

import { useSanityContext } from '~/contexts';
import { usePageContext } from '~/contexts/PageContext';
import { TextBuilder } from '~/ui/components';

import Wave from '../../../../public/icons/wave.svg';

import * as S from './AboutSection.style';

export const AboutSection = () => {
  const { toggleShadow } = usePageContext();
  const { actualities } = useSanityContext();

  const { ref, inView, entry } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    //this would trigger everytime I enter / leave this element
    //I want a shadow on <Header/> to disappear only on hero page
    //(in default behavior it would disappear after we leave this element)
    //therefore I check if boundingClientRect - visible area of element is above current page or not
    const isCrossingHeroSection =
      entry?.boundingClientRect && entry?.boundingClientRect.top > 0;
    if (isCrossingHeroSection) toggleShadow(inView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <S.AboutSection name="about" ref={ref}>
      <S.MaxWidth>
        <S.Image src={Wave} alt="vlnka" />
        {actualities.map(
          (actuality, index) =>
            actuality?.text && (
              <TextBuilder
                value={actuality.text}
                options={{ paragraph: { position: 'center' } }}
                key={`${actuality?.title}_${index}`}
              />
            )
        )}
        <S.AboutText center>
          Hledáte pro své děti skvělé letní dobrodružství? Přijďte na náš
          příměstský tábor s profesionální výukou plavání a otevírací dobou od
          7:30 do 17:00. Naši kvalifikovaní instruktoři pomohou vašim dětem
          zdokonalit své plavecké dovednosti a získat sebedůvěru ve vodě. S
          naším bohatým programem aktivit, jako jsou sportovní hry a výlety,
          budou vaše děti mít nezapomenutelné zážitky a zároveň se naučí
          spolupracovat a komunikovat s ostatními dětmi. Rezervujte si místo pro
          své dítě na našem letním táboře ještě dnes!
        </S.AboutText>
        <S.Image src={Wave} alt="vlnka" />
      </S.MaxWidth>
    </S.AboutSection>
  );
};
