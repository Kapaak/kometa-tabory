import { useCallback, useEffect, useState } from 'react';

import { getAllSheets } from '~/libs/google';

// eslint-disable-next-line import/order
import { data as campData } from './campData';

enum Criteria {
  ALL = 'all',
  OCUPIED = 'ocupied',
  AVAILABLE = 'available',
}

//images or svgs
import Adventure from '../../public/images/adventure.jpg';
import Trosečníci from '../../public/images/castaway.jpg';
import Harry from '../../public/images/harry-potter.jpg';
import Piráti from '../../public/images/pirati-z-karibiku.jpg';
import Vesmír from '../../public/images/space.jpg';
import Sport from '../../public/images/sport.jpg';
import Zootropolis from '../../public/images/zootropolis.jpg';

// import { IService } from "./ServiceSection.interface";

// export const data: IService[] = [
export const data: any = [
  {
    headline: 'T1 - Zootropolis',
    text: 'Tábor inspirovaný filmem Zootropolis.',
    image: Zootropolis,
    alt: 'Postavy z filmu zootropolis',
    url: 'zootropolis',
    info: {
      price: 4900,
      // oldPrice: 4900,
      date: '10. 7. - 14. 7. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: ZOO',
    },
    spreadsheetId: 0,
  },
  {
    headline: 'T2 - Sporťáček',
    text: 'Tábor zaměřený na sportovní hry.',
    image: Sport,
    alt: 'děti hrající fotbal na hřišti',
    url: 'sportovni-hry',
    info: {
      price: 4900,
      date: '17. 7. - 21. 7. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: Bowling',
    },
    spreadsheetId: 993666287,
  },
  {
    headline: 'T3 - Piráti z Karibiku',
    text: 'Tábor inspirovaný příběhy z filmu Piráti z karibiku',
    image: Piráti,
    alt: 'Hlavní postava z filmu piráti z karibiku',
    url: 'pirati-z-karibiku',
    info: {
      price: 4900,
      date: '24. 7. - 28. 7. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: plavba na člunech',
    },
    spreadsheetId: 63632264,
  },
  {
    headline: 'T4 - Harry Potter',
    text: 'Tábor inspirovaný příběhy z filmu Harry Potter.',
    image: Harry,
    alt: 'tři hlavní hrdinové filmu harry potter',
    url: 'harry-potter',
    info: {
      price: 4900,
      date: '31. 7. - 4. 8. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: Brněnská přehrada, hrad Veveří',
    },
    spreadsheetId: 149335024,
  },
  {
    headline: 'T5 - Cesta za dobrodružstvím',
    text: 'Tábor inspirovaný dobrodružnými příběhy.',
    image: Adventure,
    alt: 'historická mapa s kompasem ukazující směr',
    url: 'cesta-za-dobrodruzstvim',
    info: {
      price: 3499,
      oldPrice: 4900,
      date: '7. 8. - 11. 8. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: Moravský kras',
    },
    spreadsheetId: 2040410537,
  },
  {
    headline: 'T6 - Trosečníci',
    text: 'Tábor inspirovaný příběhy ze života trosečníka.',
    image: Trosečníci,
    alt: 'loď ztroskotaná na pevnině',
    url: 'trosecnik',
    info: {
      price: 3499,
      oldPrice: 4900,
      date: '14. 8. - 18. 8. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: plavba na paddleboardech',
    },
    spreadsheetId: 401116402,
  },
  {
    headline: 'T7 - Vesmírná dobrodružství',
    text: 'Tábor inspirovaný vesmírem.',
    image: Vesmír,
    alt: 'malé planety ve vesmíru',
    url: 'vesmir',
    info: {
      price: 4900,
      // oldPrice: 4900,
      date: '21. 8. - 25. 8. 2023',
      actualCapacity: 0,
      maxCapacity: 30,
      event: 'Výlet: Hvězdárna a planetárium Brno',
    },
    spreadsheetId: 785653286,
  },
];

export const useFilteredCamps = () => {
  const [filteredData, setFilteredData] = useState(campData);
  console.log(
    '🚀 ~ file: useFilteredCamps.tsx:137 ~ useFilteredCamps ~ filteredData:',
    filteredData
  );
  const [criteria, setCriteria] = useState(Criteria.ALL);

  const handleFilter = useCallback((criteria: string) => {
    switch (criteria) {
      case Criteria.ALL: {
        return setFilteredData(campData);
      }
      case Criteria.OCUPIED: {
        return setFilteredData(
          campData.filter(
            (p) => p?.info?.actualCapacity === p?.info?.maxCapacity
          )
        );
      }

      case Criteria.AVAILABLE: {
        return setFilteredData(
          campData.filter(
            (p) => p?.info?.actualCapacity !== p?.info?.maxCapacity
          )
        );
      }
      default: {
        return setFilteredData(campData);
      }
    }
  }, []);

  const sheetIds = data?.map((d: any) => d?.spreadsheetId);

  useEffect(() => {
    (async () => {
      const sheets = await getAllSheets(sheetIds);

      sheets &&
        Promise.allSettled(sheets)
          .then((resSheets: any) => {
            const actualCapacity = resSheets.map(
              (sheet: any, index: number) => ({
                actualCapacity: sheet.value.length,
                spreadsheetId: sheetIds[index],
              })
            );

            actualCapacity.forEach(
              (capacity: { actualCapacity: number; spreadsheetId: number }) => {
                setFilteredData((prev) =>
                  [...prev].map((camp) =>
                    camp?.spreadsheetId === capacity?.spreadsheetId
                      ? {
                          ...camp,
                          info: {
                            ...camp?.info,
                            actualCapacity: capacity?.actualCapacity,
                          },
                        }
                      : camp
                  )
                );
              }
            );
          })
          .catch((e) => console.log('promise error', e));
    })();
  }, [sheetIds]);

  useEffect(() => {
    handleFilter(criteria);
  }, [criteria, handleFilter]);

  return { filteredData, setCriteria, criteria };
};
