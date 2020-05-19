import styled from "styled-components";

//
export const Banner = styled.div `
    background: #111111;
    height: 100vh;
    width: 100vw;
    position: relative;
    color: white
`

export const BannerTitle = styled.div `
    position: relative;
    
 
`

export const Headline1 = styled.div `
    position: absolute;
@media only screen and (min-width: 1200px) {
    
    top: 250px;
    left: 206px;
}
   


  @media only screen and (min-width: 768px) and (max-width: 979px) {

}

@media only screen and (min-width: 980px) and (max-width: 1023px) {

}

@media only screen and (min-width: 1024px) and (max-width: 1199px) {

}
 
`

export const BTPrimary = styled.div `
font-size: 60px;
font-weight: bold;
 
`

export const BTSecondary = styled.div `
    font-size:18px;
    line-height: 1.5;
    width: 484px;
    overflow-wrap: break-word;
    position: absolute;

    @media only screen and (min-width: 1200px) {
    
    top: 450px;
    left: 920px;
}
   

    button {
        display:flex;
        justify-content:center;
        flex-direction: column;
        justify-content: flex-start;
        border: none;
        background: none;
        outline: none;
        font-size:16px;
        color:white;

        span{
            width: 45px;
            height: 1px;
            background: white;
            margin-bottom: 8px;
            
        }
    }
  
`
export const Headline = styled.div `
    margin-bottom: 35px;
 
`