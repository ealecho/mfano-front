import styled from "styled-components";


export const Containa = styled.div `
background-color: #F5F5F5;
height: 100vh;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(12, 1fr);

div { 
    grid-row: 2 / 12;
    grid-column: 2 / 12;
    max-height:100% ;
}


`

export const Headline = styled.h2 `
grid-row: 1 / 2;
grid-column: 2 / 10;
margin:none;
/* background-color:pink; */
 
`