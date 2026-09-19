//components
import { useGetDocumentByType } from '~/adapters/documentsAdapter';
import { getSanityFileDownloadUrl } from '~/utils';

import { getData } from './Footer.data';
import FooterEnding from './FooterEnding/FooterEnding';
import FooterInitial from './FooterInital/FooterInitial';
import FooterSections from './FooterSections/FooterSections';

import * as S from './Footer.style';

export function Footer() {
  const { data: gdprDocument } = useGetDocumentByType('gdpr');

  return (
    <S.Footer>
      <S.MaxWidth>
        <S.Flex gap="4rem">
          <FooterInitial />
          <FooterSections
            data={getData(
              getSanityFileDownloadUrl(gdprDocument?.file?.asset?.url)
            )}
          />
          <FooterEnding />
        </S.Flex>
      </S.MaxWidth>
    </S.Footer>
  );
}
