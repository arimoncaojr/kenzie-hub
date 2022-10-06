import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--grey4);
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

button{
    cursor: pointer;
}


:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey0: #F8F9FA;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;

    --color-sucess: #3FE864;
    --color-error: #E83F5B;

    --font-title1: 1.248rem;
    --font-title2: 1.125rem;
    --font-title3: 1.015rem;
    --font-title4: 0.888rem;

    --font-text1: 0.888rem;
    --font-text2:  0.761rem;
    --font-text3: 0.75rem;

    --font-weight1: 700;
    --font-weight2: 600;
    --font-weight3: 400;

    --card-login-width: 23.063rem;
    --card-login-height: 31.375rem;

    --card-register-width: 23.125rem;
    --card-register-height: 55.699rem;

    --input-login-width: 20.621rem;
    --input-login-height: 3rem;
    --btn-login-width: 20.25rem;
    --btn-login-height: 3rem;

    --input-register-width: 16.487rem;
    --input-register-hieght: 2.399rem;

    --btn-back-width: 4.218rem;
    --btn-back-height: 2.507rem;

    --btn-logout-width: 3.468rem;
    --btn-logout-height: 2rem;

    --border-radius-default: 4px;
}
`;
