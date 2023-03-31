import styled from "styled-components";

export const ItemCartContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  img {
    width: 25%;
    height: auto;
    object-fit: cover;
    background-color: var(--color-grey-20);
    border-radius: 6px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 5px;
    align-items: start;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: start;

      h3 {
        text-align: left;
      }
    }
  }
`;
