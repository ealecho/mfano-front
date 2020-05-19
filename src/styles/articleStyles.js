import styled from "styled-components";


export const Headline = styled.div `
    background-color: #111111;
    color: white;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

h1 {
    padding: 0;
    margin:0;
    font-weight: normal;
    font-size:18px;
    text-align: center;
}

h2 {
    font-size: 40px;
    font-weight: bold;
    padding: 0;
    margin:0;
}

`
export const Paragraph1 = styled.div `

`
export const Paragraph2 = styled.div `
    margin: 0 480px;
    line-height: 1.7;
    margin-top: 200px;

    &:first-letter { 
  float: left; 
  color: #111111; 
  font-size: 5em; 
  line-height: 0.85em; 
  padding-right: 0.1em; 
}
`

export const Image = styled.div `
  margin-top: 100px;
  margin-bottom: -500px;
`