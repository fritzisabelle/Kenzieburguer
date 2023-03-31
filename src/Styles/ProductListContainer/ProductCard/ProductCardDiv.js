import styled from "styled-components";

export const ProductCardDiv = styled.div`
  background-color: var(--color-WhiteFixed);
  min-width: 250px;
  width: 31.2%;
  height: 346px;
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;

  @media (max-width: 1000px) {
    min-width: 250px;
    width: 30%;
    height: fit-content;
  }
`;
