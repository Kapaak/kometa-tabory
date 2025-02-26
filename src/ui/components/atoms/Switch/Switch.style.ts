import * as RadixSwitch from '@radix-ui/react-switch';
import styled from 'styled-components';

export const Switch = styled(RadixSwitch.Root)`
  all: unset;
  cursor: pointer;
  min-width: 4.2rem;
  height: 2.6rem;
  background-color: #adadad;
  border-radius: 1.4rem;
  position: relative;
  box-shadow: var(--shadow);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: var(--shadow);
  }
  &[data-state='checked'] {
    background-color: var(--col-success);
  }
`;

export const SwitchThumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: var(--colw);
  border-radius: 2rem;
  box-shadow: var(--shadow);
  transition: transform 100ms;
  transform: translateX(0.2rem);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(1.9rem);
  }
`;
