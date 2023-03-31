import styled, { css } from "styled-components";

export const Buttons = styled.button`
  width: fit-content;
  padding: 10px 20px;
  border-radius: 8px;
  color: var(--color-WhiteFixed);

  ${({ ButtonStyle, Color }) => {
    switch (ButtonStyle) {
      case "Md":
        switch (Color) {
          case "Green":
            return css`
              background-color: var(--color-primary1);
              height: 40px;

              :hover {
                background-color: var(--color-primary-50);
              }
            `;
          case "Grey":
            return css`
              color: var(--color-grey-50);
              height: 40px;
              background-color: var(--color-grey-20);

              :hover {
                color: var(--color-grey-20);
                background-color: var(--color-grey-50);
              }
            `;
        }

      case "Lg":
        switch (Color) {
          case "Green":
            return css`
              background-color: var(--color-primary1);
              height: 60px;

              :hover {
                background-color: var(--color-primary-50);
              }
            `;
          case "Grey":
            return css`
              color: var(--color-grey-50);
              background-color: var(--color-grey-20);
              height: 60px;

              :hover {
                color: var(--color-grey-20);
                background-color: var(--color-grey-50);
              }
            `;
        }
    }
  }}
`;
