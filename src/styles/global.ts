import { createGlobalStyle } from "styled-components";
import GilroyEtraBold from "../fonts/Gilroy-ExtraBold.otf";
import GilroyLight from "../fonts/Gilroy-Light.otf";

export default createGlobalStyle`

@font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${GilroyEtraBold}) format('otf'),
        url(${GilroyLight}) format('woff');
        font-weight: 300;
        font-style: normal;
}

:root{
    --mainBlue: #0F4A7B;
    --red: #EA5566;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: gilroy, Sans-serif;
}

/* body{
    color: red;
} */
`