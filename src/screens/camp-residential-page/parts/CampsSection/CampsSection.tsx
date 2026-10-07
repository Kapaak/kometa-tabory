import { CampCard, LoadingCampCard } from '~/components/CampCard';
import { CampsLoadingError } from '~/components/CampsLoadingError';
import { useResidentialCamps } from '~/hooks';
import { joinValues } from '~/utils';

import * as S from './CampsSection.style';

export function CampsSection() {
  const { data, isError, isLoading } = useResidentialCamps();

  return (
    <S.CampsSection hasError={isError}>
      {isError && <CampsLoadingError />}

      {isLoading &&
        Array.from({ length: 4 }).map((_, index) => (
          <LoadingCampCard key={index} />
        ))}

      {!isLoading &&
        !isError &&
        data?.map((camp) => (
          <CampCard
            key={camp.id}
            title={joinValues([camp?.title, ' - ', camp?.name])}
            image={camp?.image}
            price={camp?.price}
            discountPrice={camp?.discountedPrice}
            date={camp?.date}
            trip={camp?.trip}
            currentCapacity={camp?.currentCapacity}
            maxCapacity={camp?.capacity}
            maleCapacity={{
              current: camp?.currentMaleCapacity,
              max: camp?.capacityMale,
            }}
            femaleCapacity={{
              current: camp?.currentFemaleCapacity,
              max: camp?.capacityFemale,
            }}
            imageAlt={camp?.alt}
            url={camp?.slug ?? '#'}
            isAvailable={camp?.availability?.open}
            availabilityLabel={camp?.availability?.label}
          />
        ))}
    </S.CampsSection>
  );
}
