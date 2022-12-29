//styles
import { MaxWidth } from "@ui-library";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
//data
import { data } from "./ServiceSection.data";
import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { getAllSheets } from "lib/google";

enum Criteria {
	All = "all",
	Ocupied = "ocupied",
	Free = "free",
}

export const ServiceSection = () => {
	const [filteredData, setFilteredData] = useState(data);
	const [selectedCriteria, setSelectedCriteria] = useState("all");
	const [sheetsRowCount, setSheetsRowCount] = useState([]);

	const handleCriteriaSelect = (val: string) => {
		setSelectedCriteria(val);
	};

	useEffect(() => {
		handleFilter(selectedCriteria);
	}, [selectedCriteria]);

	const handleFilter = (criteria: string) => {
		switch (criteria) {
			case Criteria.All: {
				return setFilteredData(data);
			}
			case Criteria.Ocupied: {
				return setFilteredData(
					data.filter(p => p?.info?.actualCapacity === p?.info?.maxCapacity)
				);
			}

			case Criteria.Free: {
				return setFilteredData(
					data.filter(p => p?.info?.actualCapacity !== p?.info?.maxCapacity)
				);
			}
			default: {
				return setFilteredData(data);
			}
		}
	};

	const sheetIds = data?.map(d => d?.spreadsheetId);

	useEffect(() => {
		(async () => {
			const sheets = await getAllSheets(sheetIds);

			sheets &&
				Promise.allSettled(sheets)
					.then((resSheets: any) => {
						const updated = resSheets.map((sheet: any) => sheet.value.length);
						setSheetsRowCount(updated);
					})
					.catch(e => console.log("promise error", e));
		})();
	}, []);

	return (
		<S.ServiceSection name="services">
			<MaxWidth>
				<Filter
					selectedOption={selectedCriteria}
					onCriteriaChange={handleCriteriaSelect}
				/>
				<S.Container>
					{filteredData.map((d, i) => (
						<Service
							key={i}
							headline={d?.headline}
							text={d?.text}
							image={d?.image}
							scrollTarget={d?.scrollTarget}
							info={d?.info}
							alt={d?.alt}
							url={d?.url}
							currentCapacity={sheetsRowCount[i] ?? 0}
						/>
					))}
				</S.Container>
			</MaxWidth>
		</S.ServiceSection>
	);
};
