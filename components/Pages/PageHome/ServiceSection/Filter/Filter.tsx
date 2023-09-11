//components
import { RadioGroup, RadioOption, Popover } from "components/Shared";
//styles
import * as S from "./Filter.style";

enum Criteria {
  ALL = "all",
  OCUPIED = "ocupied",
  AVAILABLE = "available",
}

interface FilterProps {
  onCriteriaChange: (e: string) => void;
  selectedOption: string;
}

const filterOptions: RadioOption[] = [
  {
    id: "1",
    value: Criteria.ALL,
    label: "Vše",
  },
  {
    id: "2",
    value: Criteria.AVAILABLE,
    label: "Neobsazené",
  },
  {
    id: "3",
    value: Criteria.OCUPIED,
    label: "Obsazené",
  },
];

export const Filter = ({ onCriteriaChange, selectedOption }: FilterProps) => {
  return (
    <S.Filter>
      <Popover
        buttonLabel="obsazenost"
        headline="Vyhledat:"
        accesibilityLabel="Řazení podle obsazenosti"
      >
        <RadioGroup
          selectedValue={selectedOption}
          radioOptions={filterOptions}
          onChange={onCriteriaChange}
        />
      </Popover>
    </S.Filter>
  );
};
