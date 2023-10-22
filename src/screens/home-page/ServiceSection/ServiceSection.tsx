//libraries
import { useEffect, useState } from 'react';

import { useSanityContext } from '~/contexts';
import { useFilteredCamps } from '~/hooks';
import { getAllSheets } from '~/libs/google';
import { MaxWidth } from '~/ui/components';
import { joinValues } from '~/utils';

import { Filter, Service } from './components';

import * as S from './ServiceSection.style';

export const ServiceSection = () => {
  const [sheetsRowCount, setSheetsRowCount] = useState([]);
  const { filteredData, criteria, setCriteria } = useFilteredCamps();

  const { camps } = useSanityContext();

  const handleCriteriaSelect = (val: any) => {
    setCriteria(val);
  };

  //get from sanity
  //nebo mozna ze ServerSideProps
  const sheetIds: any = [];
  // const sheetIds = data?.map((d) => d?.spreadsheetId);

  useEffect(() => {
    (async () => {
      const sheets = await getAllSheets(sheetIds);

      sheets &&
        Promise.allSettled(sheets)
          .then((resSheets: any) => {
            const updated = resSheets.map((sheet: any) => sheet.value.length);
            setSheetsRowCount(updated);
          })
          .catch((e) => console.log('promise error', e));
    })();
  }, []);

  return (
    <S.ServiceSection name="services">
      <MaxWidth>
        <Filter
          selectedOption={criteria}
          onCriteriaChange={handleCriteriaSelect}
        />
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
              currentCapacity={sheetsRowCount[index] ?? 0}
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
