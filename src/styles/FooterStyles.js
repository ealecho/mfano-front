import styled from "styled-components";

export const Input = styled.div `

height: 300px;
width: 600px;

div {
    display:flex;
}

  .form {
    box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	outline: none;
	display: block;
	width: 50%;
	padding: 7px;
	border: none;
	border-bottom: 1px solid #ddd;
	background: transparent;
	margin-bottom: 20px;
	font: 16px Arial, Helvetica, sans-serif;
	height: 45px;
}

.submit{
 display: inline-block;
 padding: 0.35em 1.2em;
 border: 0.1em solid #111111;
 margin: 0 0.3em 0.3em 0;
 border-radius: 0.12em;
 box-sizing: border-box;
 text-decoration: none;
 font-family: inherit;
 color:#111111;
 text-align:center;
 transition: all 0.2s;
 margin-top: 10px;

 &:hover{
     color:#fff;
     background-color:#111111;
}
}

`

export const Foot = styled.div `
position: relative;
padding-top:100px;
margin-bottom: 20px;



 `

export const FormHolder = styled.div `
    margin-left: 206px;
    margin-top:50px;
    display: flex;
    

`

export const Headline = styled.div `
font-size: 60px;
font-weight: bold;
margin-left: 206px;

`

export const Email = styled.div `
width: 230px;
margin-left: 30px;

.footerBlock {
    display: flex;
    flex-direction:column;
    margin-bottom: 20px;

.email {

}

  .project {
      color:#B5B6B7;
      padding-top: 10px;
}


}



`