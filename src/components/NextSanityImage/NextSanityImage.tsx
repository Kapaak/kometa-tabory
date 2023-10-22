import Image from 'next/image';

import { SanityImage } from '~/domains';
import { urlForImage } from '~/utils';

interface NextSanityImageProps {
  image: SanityImage;
  className?: string;
  alt: string;
}
export function NextSanityImage({
  className,
  image,
  alt,
}: NextSanityImageProps) {
  return (
    <Image
      src={urlForImage(image).url()}
      //className is here so we can style the image via styled-components
      className={className}
      width={100}
      height={100}
      sizes="(max-width: 800px) 100vw, 800px"
      alt={alt}
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
    />
  );
}
