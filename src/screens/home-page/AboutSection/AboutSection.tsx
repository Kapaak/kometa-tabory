//libraries
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';

//images

import { PortableText } from '@portabletext/react';

import { useSanityContext } from '~/contexts';
import { toggleShadow } from '~/state';
import { Text } from '~/ui/components';

import * as S from './AboutSection.style';
import Wave from '../../../../public/icons/wave.svg';
//styles
//redux

export const AboutSection = () => {
  const { actualities } = useSanityContext();

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
        {actualities.map((actuality, index) => (
          <PortableText
            value={actuality?.text}
            key={`${actuality?.title}_${index}`}
            components={{
              block: {
                normal: (props) => <Text center>{props.children}</Text>,
              },
            }}
          />
        ))}
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
