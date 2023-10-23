import Image from 'next/image';

import { SanityImage } from '~/domains';
import { urlForImage } from '~/utils';

interface NextSanityImageProps {
  image: SanityImage;
  className?: string;
  alt: string;
  sizes?: string;
}
export function NextSanityImage({
  className,
  image,
  alt,
  sizes,
}: NextSanityImageProps) {
  return (
    <Image
      src={urlForImage(image).url()}
      //className is here so we can style the image via styled-components
      className={className}
      width={100}
      height={100}
      //sizes = (max-width: breakpoint when we want to apply some style) + the size of the image on that breakpoint
      sizes={sizes}
      alt={alt}
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
    />
  );
}
