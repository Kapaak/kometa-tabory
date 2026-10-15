import * as RadixUICheckbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';

const GREY = {
  100: '#FFF',
  200: '#F8F8F8',
  500: '#DADADA',
  900: '#000',
};

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.4rem;
  user-select: none;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckboxIndicator = styled(RadixUICheckbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  margin-bottom: 0.1rem;
  color: ${GREY[100]};
`;
export const CheckboxRoot = styled(RadixUICheckbox.Root)`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ disabled }) =>
    disabled ? `1px solid ${GREY[500]}` : `1px solid ${GREY[900]}`};

  background-color: ${GREY[100]};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

  &:hover {
    background-color: ${GREY[200]};
  }

  &[data-state='checked'] {
    border-color: var(--col2);
    background-color: var(--col2);
  }
`;
