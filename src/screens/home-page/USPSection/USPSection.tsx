import { MaxWidth } from '~/ui/components';

import { USP_SECTION_DATA } from './constants';
import { USP } from './parts';

import * as S from './USPSection.style';

interface USPSectionProps {}

export function USPSection({}: USPSectionProps) {
  return (
    <section>
      <MaxWidth>
        <S.USPSection>
          {USP_SECTION_DATA.map((usp) => (
            <USP
              key={usp.id}
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
            />
          ))}
        </S.USPSection>
      </MaxWidth>
    </section>
  );
}
