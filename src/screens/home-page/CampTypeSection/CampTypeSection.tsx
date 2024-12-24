import { useGetAllCampTypes } from '~/adapters/campTypesAdapter';
import { MaxWidth, SectionElement } from '~/ui/components';
import { campTypeToUrl } from '~/utils/campType';

import { CampTypeCard, LoadingCampTypeCard } from './parts';

import * as S from './CampTypeSection.style';

export function CampTypeSection() {
  const { data, isLoading } = useGetAllCampTypes();
  return (
    <SectionElement name="camp-types">
      <MaxWidth>
        <S.CampTypeCards>
          {isLoading &&
            Array.from({ length: 2 }).map((_, index) => (
              <LoadingCampTypeCard key={index} />
            ))}

          {!isLoading &&
            data?.map((campType) => (
              <CampTypeCard
                key={campType.id}
                age={campType?.age}
                dailySwimmingCount={campType?.swimmingFrequency}
                description={campType?.description}
                price={campType?.price}
                discountPrice={campType?.discountPrice}
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
