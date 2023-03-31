import styled from "styled-components";

export const ProductListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  width: 70%;

  @media (max-width: 1000px) {
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;
    overflow-y: auto;
    justify-content: left;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
