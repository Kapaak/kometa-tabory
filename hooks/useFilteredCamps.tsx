import { useState, useEffect, useCallback } from "react";
import { data as campData } from "components/Pages/PageHome/ServiceSection/ServiceSection.data";

enum Criteria {
	All = "all",
	Ocupied = "ocupied",
	Free = "free",
}

export const useFilteredCamps = () => {
	const [filteredData, setFilteredData] = useState(campData);
	const [criteria, setCriteria] = useState("all");

	useEffect(() => {
		handleFilter(criteria);
	}, [criteria]);

	const handleFilter = useCallback((criteria: string) => {
		switch (criteria) {
			case Criteria.All: {
				return setFilteredData(campData);
			}
			case Criteria.Ocupied: {
				return setFilteredData(
					campData.filter(p => p?.info?.actualCapacity === p?.info?.maxCapacity)
				);
			}

			case Criteria.Free: {
				return setFilteredData(
					campData.filter(p => p?.info?.actualCapacity !== p?.info?.maxCapacity)
				);
			}
			default: {
				return setFilteredData(campData);
			}
		}
	}, []);

	return { filteredData, setCriteria, criteria };
};
