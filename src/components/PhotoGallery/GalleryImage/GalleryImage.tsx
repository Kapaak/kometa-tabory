import {
  SlideImage,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from 'yet-another-react-lightbox';

import { NextSanityImage } from '~/components';
import { SanityImage } from '~/domains';

import * as S from './GalleryImage.style';

type Slide = SlideImage & {
  src: SanityImage;
  blurDataURL?: string;
  height: number;
  width: number;
};

type Rect = {
  width: number;
  height: number;
};

function isGalleryImage(slide: Slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'
  );
}

interface GalleryImageProps {
  slide: Slide;
  rect: Rect;
}

export function GalleryImage({ slide, rect }: GalleryImageProps) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isGalleryImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide?.height) * slide.width)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height;

  if (!slide.src) return null;

  return (
    <S.GalleryImage width={width} height={height}>
      <NextSanityImage
        fill
        alt={slide.alt ?? ''}
        image={slide.src}
        loading="eager"
        objectFit="contain"
        draggable={false}
        placeholder="blur"
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </S.GalleryImage>
  );
}
