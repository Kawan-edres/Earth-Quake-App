import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
    font-weight: bold;


}



button{
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1 rem;
    padding: 1rem 2rem ;
    border: 3px solid  #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover{  
        background-color:#23d997;
        color: white;
    }
}

    h1{
        font-size: 4rem;
        color: #8bb859;

    }
   

    
    h4{
        font-size:2rem;

      
    }

span{
        color:#23d997 ;
    }

    a{
        font-size: 1.5rem;
    }
    p{
        padding: 3rem 0rem ;
        color: #ccc;
        font-size: 1.4rem;
        line-height:150%;
    }

`;

export default GlobalStyle;
