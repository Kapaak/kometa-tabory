import { Warning } from '@phosphor-icons/react';

import { SanityImage } from '~/domains';
import { Flex } from '~/ui/components';

import * as S from './CampCardImage.style';

interface CampCardImageProps {
  image?: SanityImage;
  alt?: string;
  warningMessage?: string;
  hasWarning?: boolean;
}

export function CampCardImage({
  image,
  alt,
  hasWarning = false,
  warningMessage,
}: CampCardImageProps) {
  return (
    <>
      {image && (
        <S.Image
          image={image}
          alt={alt ?? ''}
          width={image.asset.metadata.dimensions.width}
          height={image.asset.metadata.dimensions.height}
          hasFilter={hasWarning}
          sizes="(max-width: 820px) 90vw,
            33vw
          "
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
    </>
  );
}
