//libraries

import { useSanityContext } from '~/contexts';
import { useGoogleSheetsCapacities } from '~/hooks';
import { MaxWidth, Space } from '~/ui/components';
import { joinValues } from '~/utils';

import { IndividualCourse, Service } from './components';

import * as S from './ServiceSection.style';

export const ServiceSection = () => {
  const { camps } = useSanityContext();

  const { googleSheetsCapacities } = useGoogleSheetsCapacities();

  return (
    <S.ServiceSection name="services">
      <MaxWidth>
        <S.Container>
          {camps?.map((camp, index: number) => (
            <Service
              key={`${camp?.title}_${index}`}
              headline={joinValues([camp?.title, ' - ', camp?.name])}
              image={camp?.photo}
              price={camp?.price}
              discountPrice={camp?.discountedPrice}
              trip={camp?.trip}
              date={camp?.date}
              maxCapacity={camp?.capacity}
              currentCapacity={
                typeof camp?.spreadsheetId === 'number'
                  ? googleSheetsCapacities[camp.spreadsheetId]
                  : NaN
              }
              imageAlt={camp?.photoAlt}
              url={camp?.targetUrl ?? '#'}
              isAvailable={camp?.availability?.open}
              availabilityLabel={camp?.availability?.label}
            />
          ))}
        </S.Container>
      </MaxWidth>
    </S.ServiceSection>
  );
};
