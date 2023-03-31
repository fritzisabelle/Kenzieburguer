import styled from "styled-components";

export const FormSearch = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid var(--color-grey-20);
  background-color: var(--color-WhiteFixed);

  input::placeholder {
    color: var(--color-grey-20);
  }

  :hover {
    border: 2px solid var(--color-grey-50);
  }

  @media (max-width: 720px) {
    input {
      max-width: 50%;
    }

    max-width: 90%;
  }
`;
