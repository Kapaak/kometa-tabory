import { Warning } from '@phosphor-icons/react';

import { SanityImage } from '~/domains';
import { Flex } from '~/ui/components';

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
      {image && <S.Image image={image} alt={alt} hasFilter={hasWarning} />}
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
