import styled from "styled-components";

export const FormInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--collg);
  padding: 1rem;
  width: 100%;
  font-size: 1.6rem;
  font-family: var(--font2);

  &::placeholder {
    font-size: 1.3rem;
  }

  &:focus {
    /* outline: 1px solid var(--dark-blue); */
    /* border: 1px solid transparent; */
    &::placeholder {
      color: transparent;
    }
  }
`;
