import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "futura-pt", sans-serif;
        font-weight: 300;
        font-style: normal;
        letter-spacing: 1px;
    }
        
    html {
        --color-primary: #0192D9;
        --color-secondary: #eef8fd;
        --color-light: #FFFCFE;
        --color-white: #fff;
        --color-black: black;
        --color-text-light: white;
        --color-text: #464440;
        --color-text-muted: grey;
        --color-grey: #EFEFE9;
        --box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        --border-radius: 5px;
        scroll-padding-top: 20px;
    }
    
    body {
        background: var(--color-light);
        color: var(--color-text);
    }

    .nav-bg{
        background-color: var(--color-light);
        transition: all 0.5s ease-in-out;
    }

    .active{
        color: #ea4c89;
        border-bottom: 2px solid #ea4c89;
        border-radius: 1px;
        height: 70px;
    }

    h1, h2, h3{
        font-family: "quiche-flare", sans-serif;
        font-style: normal;
        font-weight: 700;

    }


    h2{
        font-size: 3rem; 
        padding-bottom: 3rem;

    }

    h3{
        font-size: 2rem;   
    }

    p{
        margin-bottom: 20px;
    }

    .main-global-styling {
        width: 90vw;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 0 2rem 0;
    }

    .section{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    img{
        object-fit: cover;
    }

    a{
        color: #ea4c89;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover, &:focus{
            color: #f082ac;
        
        }
    }

`;

export default GlobalStyle;
