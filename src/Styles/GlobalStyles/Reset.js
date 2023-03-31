import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  *{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body, div, span, applet, object, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, section, summary,
  time, mark, audio, video, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: none;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

`;
