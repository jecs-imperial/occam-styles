"use strict";

import { DEFAULT_HOST } from "../constants";

const firaCodeStyle = (host = DEFAULT_HOST) => `

  @font-face {
    font-family: "Fira Code";
    src: url("${host}/css/woff2/FiraCode-Light.woff2") format("woff2"),
    url("${host}/css/woff2/FiraCode-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Fira Code";
    src: url("${host}/css/woff2/FiraCode-Regular.woff2") format("woff2"),
    url("${host}/css/woff2/FiraCode-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Fira Code";
    src: url("${host}/css/woff2/FiraCode-Medium.woff2") format("woff2"),
    url("${host}/css/woff2/FiraCode-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Fira Code";
    src: url("${host}/css/woff2/FiraCode-Bold.woff2") format("woff2"),
    url("${host}/css/woff2/FiraCode-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

`;

export default firaCodeStyle;
