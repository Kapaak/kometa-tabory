import { MaxWidth } from '~/ui/components';

import { campTypeData } from './constants';
import { CampTypeCard } from './parts';

import * as S from './CampTypeSection.style';

interface CampTypeSectionProps {}

export function CampTypeSection({}: CampTypeSectionProps) {
  return (
    <section>
      <MaxWidth>
        <S.CampTypeCards>
          {campTypeData.map((campType) => (
            <CampTypeCard
              key={campType.id}
              age={campType?.age}
              dailySwimmingCount={campType?.dailySwimmingCount}
              description={campType?.description}
              price={campType?.price}
              title={campType?.title}
              url={campType?.url}
              image={campType?.image}
              // availableFrom="2026-11-06"
            />
          ))}
        </S.CampTypeCards>
      </MaxWidth>
    </section>
  );
}
