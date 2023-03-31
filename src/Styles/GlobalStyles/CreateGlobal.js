import { createGlobalStyle } from "styled-components";

export const CreateGlobal = createGlobalStyle`
  :root {
    --text-title1: 26px;
    --text-title2: 22px;
    --text-title3: 18px;
    --text-title4: 14px;
    --text-headline: 16px;
    --text-body: 14px;
    --text-body600: 600;
    --text-caption: 12px;

    --color-primary1: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-gray-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-0: #F5F5F5;
    --color-WhiteFixed: #fff;
    --feedback-Negative: #E60000;
    --feedback-Warning: #FFCD07;
    --feedback-Sucess: #168821;
    --feedback-Information: #155BCB;
  }

  #root {
    font-family: 'Inter', sans-serif;
    max-width: 100%;
    text-align: center;
  }  

  main{
    display: flex;
    width: 1370px;
    max-width: 90%;
    margin: 40px auto;
    gap: 65px;
    background-color: var(--color-WhiteFixed);
  }

  h1{
    font-size: var(--text-title1);
  }

  h2{
    font-size: var(--text-title2);
  }

  h3{
    font-size: var(--text-title3);
  }

  h4{
    font-size: var(--text-title4);
  }

  .headline {
    font-size: var(--text-title5);
  }

  p {
    font-size: var(--text-body);
    font-family: 'Inter', sans-serif
  }

  .body600 {
    font-size: var(--text-body);
    font-weight: var(--text-body600);
  }

  .fillContainer{
    width: 100%;
  }
  
  small {
    font-size: var(--text-caption);
  }

  @media (max-width: 1000px) {
    main{
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;
