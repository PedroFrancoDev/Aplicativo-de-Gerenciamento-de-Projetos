import { createGlobalStyle } from "styled-components";
import "./colors.css";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: Inter;
        box-sizing: border-box;
        font-size: 17px;
    }

    body {
        background-color: var(--background);
        color: var(--textColor);
    }

    img {
        object-fit: cover;
    }
    button,
    input,
    textarea,
    select {
        outline: none;
        cursor: pointer;
        border: none;
        color: var(--black400);
        font-size: 17px;

    background-color: var(--white);
    }

    li, a {
        list-style: none;
        text-decoration: none;
    }
`;