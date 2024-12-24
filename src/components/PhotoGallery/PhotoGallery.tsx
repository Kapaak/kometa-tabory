import 'yet-another-react-lightbox/styles.css';

import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

import { useGetAllPhotosByCampType } from '~/adapters/photoAdapter';
import { CampType } from '~/types';
import { Headline } from '~/ui/components';

import { GalleryImage } from './GalleryImage';
import { PhotoGrid } from './PhotoGrid';

const LightboxComponent = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

interface PhotoGalleryProps {
  campType?: CampType;
}

export const PhotoGallery = ({ campType }: PhotoGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const { data, isLoading } = useGetAllPhotosByCampType(campType);

  const openLightbox = useCallback((photoIndex: number) => {
    setViewerIsOpen(true);
    setCurrentImage(photoIndex);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <Headline>Galerie</Headline>
      <PhotoGrid photos={data} loading={isLoading} onClick={openLightbox} />
      <LightboxComponent
        open={viewerIsOpen}
        index={currentImage}
        close={closeLightbox}
        //@ts-ignore I changed the type in GalleryImage.tsx
        slides={data?.map((photo) => {
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
    </div>
  );
};
