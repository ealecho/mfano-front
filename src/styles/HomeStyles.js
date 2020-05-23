import styled from "styled-components";
import media from "styled-media-query";

//

export const Banner = styled.div `
    background: #111111;
    height: 95vh;
    width: 100vw;
    position: relative;
    color: white;
`

export const BannerRow = styled.div `
    display: grid;
    height: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr)
`

export const Headline1 = styled.div `
height:100%;
grid-row: 3 / 10;
grid-column: 3 / 10;



  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size: 5vw;
    grid-column: 3 / 8;
    grid-row: 3 / 6;
   
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
   
    grid-column: 3 / 8;
    grid-row: 3 / 8;

  `}

 
`

export const BTPrimary = styled.h2 `

${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size: 6.9vw;
    
   
  `}


 
`

export const BTSecondary = styled.div `
    line-height: 1.5;
    width: 100%;
    overflow-wrap: break-word;
    grid-row: 6 / 12;
    grid-column: 3 / 10;
    

    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    
    
   
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    
    grid-column: 5 / 12;
    grid-row: 7 / 10;
   
   
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    
    grid-column: 8 / 12;
    grid-row: 8 / 11;
    

  `}


   

    button {
       
        background: none;
        font-size:0.8rem;
        font-weight: lighter;
        color:white;
        margin-top: 25px;
        cursor: pointer;
        border: solid 2px;
        padding: 10px 10px;
        border-radius: 100px 100px 100px 100px;
        text-transform: uppercase;
        
        
        span{
            width: 45px;
              
        }
    }
  
`
export const Definition = styled.p `
 
`