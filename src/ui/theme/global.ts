import { createGlobalStyle } from 'styled-components';

import { dimensions } from './breakpoints';
import { styleReset } from './style-reset';

export const GlobalStyles = createGlobalStyle`
    ${styleReset}

    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color:inherit;
    }

    :root{
        --font1: 'Bebas Neue', cursive;
        --font2: 'Poppins', sans-serif;

        --col1: #73F0C0;
        --col1-light:#ABF6D9;
        --col1-hover: #6ed8b0;
        --col2-hover: #1A5FBF;
        --col2: #2172DD;
        --col3: #DCE9FA;
        --col4:#FFCA0F;
        --colw: #F8F8F8;
        --collg: #dcdcdc;
        --colg:#9A9A9A;
        --colb: #001427;
        --colr:#DD2121;
        --col-success:#34C759;

        --max-width:145rem;
        --side-padding:2rem;
        --vertical-padding:2rem;
        --gap:2.5rem;
        --header-height:7rem;

        --shadow:0 0 20px 0 rgba(10, 19, 10, 0.1);
        --small-border-rad:1rem;

        --ftext:1.6rem;
        --fnavlink:2rem;
        --fbutton:1.4rem;
        --fmheadline:4.5rem;
        --fmsheadline:2.5rem;
        --fheadline:4rem;
        --fsheadline:2.5rem;
    }

    html{
        font-size: 62.5%;
        background-color: var(--colw);
    }

    body{
        font-family: var(--font2);
        font-size: 1.6rem;
        color:var(--colb);
    }

    @media(${dimensions.tablet}){
        :root{
            --side-padding:6rem;
            --gap:4rem;
        }
    }

    @media(${dimensions.desktop}){
        :root{
            --ftext:1.6rem;
            --fmheadline:7.5rem;
            --fmsheadline:3.8rem;
            --fheadline:5.6rem;
        }
    }
`;
