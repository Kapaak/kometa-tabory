import { useId } from 'react';
import { Controller } from 'react-hook-form';
import Select, {
  DropdownIndicatorProps,
  StylesConfig,
  components,
} from 'react-select';

import { CaretCircleDown } from '@phosphor-icons/react';
import { ValidationRule } from 'react-hook-form/dist/types';

type Option = {
  label: string;
  value: string;
};
interface ControlledSelectProps {
  name: string;
  placeholder: string;
  options: Option[];
  required?: boolean | string;
  pattern?: ValidationRule<RegExp>;
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretCircleDown size={22} cursor="pointer" />
    </components.DropdownIndicator>
  );
};

const styles: StylesConfig = {
  control: (baseStyles, state) => ({
    display: 'flex',
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
    fontFamily: 'var(--font2)',
    border: '2px solid transparent',
    borderColor: state.isFocused ? '2px solid pink' : 'none',
    borderBottom: !state.isFocused ? '1px solid var(--collg)' : 'none',
    outline: state.isFocused ? '2px solid var(--col2)' : 'none',
    height: '4.6rem',
    transition: 'none',
    borderRadius: '.2rem',
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    fontSize: '1.3rem',
  }),
};

export const ControlledSelect = ({
  name,
  placeholder,
  options,
  required,
  pattern,
}: ControlledSelectProps) => {
  const id = useId();

  return (
    <Controller
      name={name}
      rules={{ required, pattern }}
      render={({ field: { onChange, value, name, ...rest } }) => (
        <Select
          name={name}
          instanceId={id}
          isSearchable
          placeholder={placeholder}
          options={options}
          menuPosition="fixed"
          menuPlacement="auto"
          value={options.find((c) => c.value === value) ?? ''}
          //@ts-ignore
          onChange={(val: Option) => onChange(val.value)}
          styles={styles}
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
          }}
          {...rest}
        />
      )}
    />
  );
};
