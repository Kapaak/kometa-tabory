import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

const LightboxComponent = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

import { useSanityContext } from '~/contexts';
import { Headline, MaxWidth, SectionElement } from '~/ui/components';

import 'yet-another-react-lightbox/styles.css';
import { GalleryImage } from './GalleryImage';
import { PhotoGrid } from './PhotoGrid';

export const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const { photoGallery } = useSanityContext();

  const openLightbox = useCallback((photoIndex: number) => {
    setViewerIsOpen(true);
    setCurrentImage(photoIndex);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <SectionElement name="gallery">
      <MaxWidth>
        <Headline>Galerie</Headline>
        <PhotoGrid photos={photoGallery} onClick={openLightbox} />
        <LightboxComponent
          open={viewerIsOpen}
          index={currentImage}
          close={closeLightbox}
          //@ts-ignore I changed the type in GalleryImage.tsx
          slides={photoGallery?.map((photo) => {
            return {
              src: photo.image,
              alt: photo.alt,
              width: photo?.image?.asset.metadata.dimensions.width,
              height: photo.image?.asset.metadata.dimensions.height,
            };
          })}
          //@ts-ignore I changed the type in GalleryImage.tsx
          render={{ slide: GalleryImage }}
        />
      </MaxWidth>
    </SectionElement>
  );
};
