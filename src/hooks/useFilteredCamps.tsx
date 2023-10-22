import { useState } from 'react';

// eslint-disable-next-line import/order

enum Criteria {
  ALL = 'all',
  OCUPIED = 'ocupied',
  AVAILABLE = 'available',
}

export const useFilteredCamps = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [criteria, setCriteria] = useState(Criteria.ALL);

  // const handleFilter = useCallback((criteria: string) => {
  //   switch (criteria) {
  //     case Criteria.ALL: {
  //       return setFilteredData(campData);
  //     }
  //     case Criteria.OCUPIED: {
  //       return setFilteredData(
  //         campData.filter(
  //           (p) => p?.info?.actualCapacity === p?.info?.maxCapacity
  //         )
  //       );
  //     }

  //     case Criteria.AVAILABLE: {
  //       return setFilteredData(
  //         campData.filter(
  //           (p) => p?.info?.actualCapacity !== p?.info?.maxCapacity
  //         )
  //       );
  //     }
  //     default: {
  //       return setFilteredData(campData);
  //     }
  //   }
  // }, []);

  // const sheetIds = data?.map((d: any) => d?.spreadsheetId);

  // useEffect(() => {
  //   (async () => {
  //     const sheets = await getAllSheets(sheetIds);

  //     sheets &&
  //       Promise.allSettled(sheets)
  //         .then((resSheets: any) => {
  //           const actualCapacity = resSheets.map(
  //             (sheet: any, index: number) => ({
  //               actualCapacity: sheet.value.length,
  //               spreadsheetId: sheetIds[index],
  //             })
  //           );

  //           actualCapacity.forEach(
  //             (capacity: { actualCapacity: number; spreadsheetId: number }) => {
  //               setFilteredData((prev) =>
  //                 [...prev].map((camp) =>
  //                   camp?.spreadsheetId === capacity?.spreadsheetId
  //                     ? {
  //                         ...camp,
  //                         info: {
  //                           ...camp?.info,
  //                           actualCapacity: capacity?.actualCapacity,
  //                         },
  //                       }
  //                     : camp
  //                 )
  //               );
  //             }
  //           );
  //         })
  //         .catch((e) => console.log('promise error', e));
  //   })();
  // }, [sheetIds]);

  // useEffect(() => {
  //   handleFilter(criteria);
  // }, [criteria, handleFilter]);

  return { filteredData, setCriteria, criteria };
};
