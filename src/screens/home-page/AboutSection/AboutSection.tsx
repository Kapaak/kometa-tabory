import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { usePageContext } from '~/contexts/PageContext';
import AboutUsImage1 from '~/public/images/about-us/photo1.jpg';
import AboutUsImage3 from '~/public/images/about-us/photo3.jpg';
import AboutUsImage4 from '~/public/images/about-us/photo4.jpg';
import AboutUsImage5 from '~/public/images/about-us/photo5.jpg';
import AboutUsImage6 from '~/public/images/about-us/photo6.jpg';
import { Headline, MaxWidth, Strong, VerticalStack } from '~/ui/components';

import * as S from './AboutSection.style';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  { src: AboutUsImage3, alt: 'Děti na táborovém výletu' },
  { src: AboutUsImage4, alt: 'Plavečtí trenéři Komety s dětmi' },
  { src: AboutUsImage1, alt: 'Trenér mezi dětmi na bazéně' },
  { src: AboutUsImage5, alt: 'Dva trenéři plavání na selfie s dětmi' },
  { src: AboutUsImage6, alt: 'Táborové míčové hry' },
];

export const AboutSection = () => {
  const { toggleShadow } = usePageContext();

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
      <MaxWidth>
        <S.AboutUsContainer gap="4.8rem">
          <S.AboutUsCarousel
            responsive={responsive}
            draggable
            ssr
            infinite
            autoPlay
            autoPlaySpeed={4000}
            transitionDuration={100}
            pauseOnHover
          >
            {images.map((image, index) => (
              <S.AboutUsImage
                key={index}
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 90vw,
            40vw
          "
                placeholder="blur"
              />
            ))}
          </S.AboutUsCarousel>
          <VerticalStack flex="1 1 50%">
            <Headline>Naše tábory</Headline>
            <S.AboutText>
              Hledáte pro své děti skvělé letní dobrodružství? Přijďte na náš
              příměstský <Strong>tábor s profesionální výukou plavání</Strong> a
              otevírací dobou <Strong>od 7:30 do 17:00</Strong>.
              <br />
              <br />
              Naši kvalifikovaní instruktoři pomohou vašim dětem zdokonalit své
              plavecké dovednosti a získat sebedůvěru ve vodě. S naším bohatým
              programem aktivit, jako jsou sportovní hry a výlety, budou vaše
              děti mít <Strong>nezapomenutelné zážitky</Strong> a zároveň se
              naučí spolupracovat a komunikovat s ostatními dětmi. Rezervujte si
              místo pro své dítě na našem letním táboře ještě dnes!
            </S.AboutText>
          </VerticalStack>
        </S.AboutUsContainer>
      </MaxWidth>
    </S.AboutSection>
  );
};
