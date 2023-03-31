import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  padding: 20px 0px;
  background-color: var(--color-grey-0);

  div {
    margin: 0 auto;
    width: 1370px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 475px) {
    div {
      flex-direction: column;
      align-items: center;
      width: 90%;
    }
  }
`;
