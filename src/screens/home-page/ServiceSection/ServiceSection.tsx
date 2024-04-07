import { useSanityContext } from '~/contexts';
import { useGoogleSheetsCapacities } from '~/hooks';
import { MaxWidth, Space, Text } from '~/ui/components';
import { joinValues } from '~/utils';

import { Service } from './components';

import * as S from './ServiceSection.style';

export const ServiceSection = () => {
  const { camps } = useSanityContext();

  const { googleSheetsCapacities, isError } = useGoogleSheetsCapacities();

  //Check if our courses are not full (I assume that full === 30 but if its different value its fine cuz its close to the number anyways)
  const hasValueLowerThan30 = (obj: Record<number, number>) => {
    return Object.values(obj).some((value) => value < 30);
  };

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
              isDataError={isError}
              availabilityLabel={camp?.availability?.label}
            />
          ))}
        </S.Container>

        {!hasValueLowerThan30(googleSheetsCapacities) && (
          <>
            <Space />
            <Text center>
              Pokud je na vámi vybraném termínu obsazeno, nezoufejte! Máme
              tábory i na{' '}
              <S.UnderlinedLink href="https://www.plavanikometa.cz/tabor-kravi-hora/">
                Kraví hoře
              </S.UnderlinedLink>{' '}
              a{' '}
              <S.UnderlinedLink href="https://www.plavanikometa.cz/tabor-pisarky/">
                Pisárkách
              </S.UnderlinedLink>{' '}
              .
            </Text>
          </>
        )}
      </MaxWidth>
    </S.ServiceSection>
  );
};
