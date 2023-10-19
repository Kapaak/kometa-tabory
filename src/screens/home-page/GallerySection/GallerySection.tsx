//libraries
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
//components
import { MaxWidth, SectionElement, Headline } from "~/ui/components";
import { PhotoGrid } from "./PhotoGrid";
//data
import { photos } from "./GallerySection.data";

export const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

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
        <PhotoGrid photos={photos} onClick={openLightbox} />
        {/* tuhle knihovnu zamen za jinej lighthouse uz dlouho nebyla menena */}
        {/* @ts-ignore */}
        <ModalGateway>
          {viewerIsOpen && (
            <Modal onClose={closeLightbox}>
              <Carousel views={photos} currentIndex={currentImage} />
            </Modal>
          )}
        </ModalGateway>
      </MaxWidth>
    </SectionElement>
  );
};
