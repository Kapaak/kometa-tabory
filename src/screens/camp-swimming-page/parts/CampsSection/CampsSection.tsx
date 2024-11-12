import { CampCard, LoadingCampCard } from '~/components/CampCard';
import { useSwimmingCamps } from '~/hooks';
import { getDiscount, joinValues } from '~/utils';

import { CampSectionError } from '../../components';

import * as S from './CampsSection.style';

export function CampsSection() {
  //TOOD: odebrat nacitani z uvodni stranky, at neni tak pomala ...
  //TODO: TY camp types pridat do SANITY at ty data muzou zadavat

  //NESMIS TED ULOZIT DO SANITY ZMENY Z LOKALU .. uz tam je jinej typ
  //TODO:NAPOJIT na sanity campy .. a upravit typ, udelej podle tripcamps

  const { data, isError, isLoading } = useSwimmingCamps();

  return (
    <S.CampsSection hasError={isError}>
      {isError && <CampSectionError />}

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
            discountPrice={
              camp?.discountedPrice &&
              getDiscount(camp?.price, camp?.discountedPrice)
            }
            trip={camp?.trip}
            date={camp?.date}
            currentCapacity={camp?.currentCapacity}
            maxCapacity={camp?.capacity}
            imageAlt={camp?.alt}
            url={camp?.slug ?? '#'}
            isAvailable={camp?.availability?.open}
            availabilityLabel={camp?.availability?.label}
          />
        ))}
    </S.CampsSection>
  );
}
