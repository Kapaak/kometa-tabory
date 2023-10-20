//libraries
import { useEffect, useState } from "react";

import { useFilteredCamps } from "~/hooks";
import { getAllSheets } from "~/libs/google";
//styles
import { MaxWidth } from "~/ui/components";

//components
import { Filter } from "./Filter";
import Service from "./Service/Service";
//data
import { data } from "./ServiceSection.data";
import * as S from "./ServiceSection.style";

export const ServiceSection = () => {
  const [sheetsRowCount, setSheetsRowCount] = useState([]);
  const { filteredData, criteria, setCriteria } = useFilteredCamps();

  const handleCriteriaSelect = (val: any) => {
    setCriteria(val);
  };

  const sheetIds = data?.map((d) => d?.spreadsheetId);

  useEffect(() => {
    (async () => {
      const sheets = await getAllSheets(sheetIds);

      sheets &&
        Promise.allSettled(sheets)
          .then((resSheets: any) => {
            const updated = resSheets.map((sheet: any) => sheet.value.length);
            setSheetsRowCount(updated);
          })
          .catch((e) => console.log("promise error", e));
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
          {filteredData.map((d: any, i: any) => (
            <Service
              key={i}
              headline={d?.headline}
              text={d?.text}
              image={d?.image}
              info={d?.info}
              alt={d?.alt}
              url={d?.url}
              currentCapacity={sheetsRowCount[i] ?? 0}
              isAfterSeason={true}
            />
          ))}
        </S.Container>
      </MaxWidth>
    </S.ServiceSection>
  );
};
