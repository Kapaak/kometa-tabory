import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  //auto-fill by tam nechaval misto a nevyplnoval ten zbytek
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4rem;
  padding: 4rem 0;
`;
