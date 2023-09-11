//libraries
import { useEffect, useState } from "react";
import { getAllSheets } from "lib/google";
import { useFilteredCamps } from "@/hooks";
//styles
import { MaxWidth } from "@ui-library";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
import { Filter } from "./Filter";
//data
import { data } from "./ServiceSection.data";

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
          {filteredData.map((d, i) => (
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
