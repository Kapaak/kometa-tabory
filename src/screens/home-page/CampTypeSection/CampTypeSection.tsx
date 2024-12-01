import { useGetAllCampTypes } from '~/adapters/campTypesAdapter';
import { MaxWidth, SectionElement } from '~/ui/components';
import { campTypeToUrl } from '~/utils/campType';

import { CampTypeCard } from './parts';

import * as S from './CampTypeSection.style';

export function CampTypeSection() {
  const { data, isLoading } = useGetAllCampTypes();
  return (
    <SectionElement name="camp-types">
      <MaxWidth>
        <S.CampTypeCards>
          {data?.map((campType) => (
            <CampTypeCard
              key={campType.id}
              age={campType?.age}
              dailySwimmingCount={campType?.swimmingFrequency}
              description={campType?.description}
              price={campType?.price}
              title={campType?.title}
              url={campTypeToUrl(campType?.value)}
              image={{ src: campType?.image, alt: campType?.alt }}
            />
          ))}
        </S.CampTypeCards>
      </MaxWidth>
    </SectionElement>
  );
}
