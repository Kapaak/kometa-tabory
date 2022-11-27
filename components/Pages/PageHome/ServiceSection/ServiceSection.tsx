//styles
import { MaxWidth } from "@ui-library";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
//data
import { data } from "./ServiceSection.data";
import { ChangeEvent, useEffect, useState } from "react";
import { Filter } from "./Filter";

enum Criteria {
	All = "all",
	Ocupied = "ocupied",
	Free = "free",
}

export const ServiceSection = () => {
	const [filteredData, setFilteredData] = useState(data);
	const [open, setOpen] = useState(false);
	const [selectedCriteria, setSelectedCriteria] = useState("all");

	const handleCriteriaSelect = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedCriteria(e.currentTarget.value);
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

	return (
		<S.ServiceSection name="services">
			<MaxWidth>
				<Filter
					isOpen={open}
					onClick={() => setOpen(prev => !prev)}
					onCriteriaChange={handleCriteriaSelect}
					selectedCriteria={selectedCriteria}
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
						/>
					))}
				</S.Container>
			</MaxWidth>
		</S.ServiceSection>
	);
};
