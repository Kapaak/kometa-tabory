//libraries
import styled from 'styled-components';
//styles

export const Header = styled.header.withConfig({
  shouldForwardProp: (prop) => !['hasShadow'].includes(prop),
})<{ hasShadow: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 9;
  background-color: var(--colw);
  box-shadow: ${({ hasShadow }) =>
    hasShadow ? '0 0 20px 0 rgba(10,19,10,.2)' : 'none'};

  transition: all 0.5s ease;
`;
