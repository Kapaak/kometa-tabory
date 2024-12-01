import dynamic from 'next/dynamic';
import { useState } from 'react';

import { PlayCircle } from '@phosphor-icons/react';
import Video from 'yet-another-react-lightbox/plugins/video';

import { useSanityContext } from '~/contexts';
import HeroImage from '~/public/images/hero-img.jpg';
import {
  HorizontalStack,
  MainHeadline,
  MainSubheadline,
  MaxHeight,
} from '~/ui/components';
import { scrollTo } from '~/utils';

import * as S from './HeroSection.style';

const LightboxComponent = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

export const HeroSection = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const { videos } = useSanityContext();

  return (
    <S.HeroSection name="home">
      <LightboxComponent
        open={toggleModal}
        plugins={[Video]}
        close={() => setToggleModal(false)}
        video={{
          autoPlay: true,
        }}
        styles={{
          navigationNext: {
            display: 'none',
          },
          navigationPrev: {
            display: 'none',
          },
        }}
        carousel={{
          finite: true,
        }}
        slides={[
          {
            type: 'video',
            width: 1280,
            height: 720,
            sources: [
              {
                src: videos[0]?.videoFile.asset.url,
                type: 'video/mp4',
              },
            ],
          },
        ]}
      />
      <MaxHeight $gradient={true}>
        <S.MaxWidth>
          <S.FlexWrapper justify="flex-end" gap="1rem" align="flex-start">
            <div>
              <MainHeadline>Tábory lužánky</MainHeadline>
              <MainSubheadline>Plavecká škola kometa</MainSubheadline>
            </div>
            <div>
              <S.TextContainer variant="light" bold>
                Přijďte si s námi užít spoustu zábavy na sportovních
                příměstských táborech! <br /> Pro děti od 4 do 13 let.
              </S.TextContainer>
            </div>
            <HorizontalStack flex="0" wrap="wrap" gap="1rem">
              <S.LightButton
                variant="filled"
                color="secondary"
                onClick={() => scrollTo('camp-types')}
              >
                Dostupné tábory
              </S.LightButton>
              <S.PlayVideoButton
                variant="plain"
                onClick={() => setToggleModal(true)}
              >
                <PlayCircle size={48} weight="thin" />
                Přehrát táborové video
              </S.PlayVideoButton>
            </HorizontalStack>
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
