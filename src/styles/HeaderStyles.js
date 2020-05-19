import styled from 'styled-components'
import {motion} from 'framer-motion'

export const HeaderNav = styled.div `
height: 0px;
width: 100%;
position: absolute;
top: 72px;
right: 0;
left: 0;
z-index:99;

`

export const Logo =styled.div `
a {
    font-size: 1.8rem;
    font-weight: 800;
    color: #111111;
    background-color: white;
    padding: 0.8rem

}
`
export const Menu =  styled.div`
    button {
        transform-origin: center;
        border: none;
        padding: 20px;
        background: none;
        outline: none;
        span {
            width: 45px;
            height: 5px;
            display: block;
            background: white;
            margin: 8px;
        }
    }
`