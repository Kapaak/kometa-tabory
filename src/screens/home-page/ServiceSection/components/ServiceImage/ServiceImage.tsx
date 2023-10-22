import { Warning } from '@phosphor-icons/react';

import { SanityImage } from '~/domains';
import { Flex } from '~/ui/components';
import { urlForImage } from '~/utils';

import { imageVariant } from '../../variants';

import * as S from './ServiceImage.style';

interface ServiceImageProps {
  image?: SanityImage;
  alt: string;
  warningMessage?: string;
  hasWarning?: boolean;
}

export function ServiceImage({
  image,
  alt,
  hasWarning = false,
  warningMessage,
}: ServiceImageProps) {
  return (
    <S.ServiceImage variants={imageVariant} transition={{ bounce: 0 }}>
      {image && (
        <S.Image
          src={urlForImage(image).url()}
          width={100}
          height={100}
          sizes="(max-width: 800px) 100vw, 800px"
          alt={alt}
          hasFilter={hasWarning}
          placeholder="blur"
          blurDataURL={image.asset.metadata.lqip}
        />
      )}
      {hasWarning && (
        <S.WarningContainer>
          <Flex align="center" justify="center">
            <Warning size={40} color="var(--col1)" />
            <S.WarningText>{warningMessage}</S.WarningText>
          </Flex>
        </S.WarningContainer>
      )}
    </S.ServiceImage>
  );
}
