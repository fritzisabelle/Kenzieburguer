import styled from "styled-components";

export const ShopCartContainer = styled.aside`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  > div {
    min-height: 230px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    height: 100%;
    padding: 20px 10px;
    border-radius: 0px 0px 5px 5px;

    background-color: var(--color-grey-0);
  }

  h4 {
    display: flex;
    align-items: center;
    height: 65px;
    padding: 0px 20px;
    border-radius: 5px 5px 0px 0px;

    background-color: var(--color-primary1);
    color: var(--color-WhiteFixed);
  }

  .divisor {
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-20);
  }

  .containerTotal {
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-bottom: 10px;
  }

  @media (max-width: 1300px) {
    width: 40%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
