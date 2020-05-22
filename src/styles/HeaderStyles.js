import styled from 'styled-components'
import media from "styled-media-query";
import {motion} from 'framer-motion'

export const HeaderNav = styled.div `
position: absolute;
top: 72px;
right: 0;
left: 0;
z-index:99;

`

export const Nav = styled.div `

 ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    grid-column: 2 / 12
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    grid-column: 2 / 12
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    grid-column: 2 / 12
  `}
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
        padding: 20px 0;
        background: none;
        outline: none;
        span {
            width: 45px;
            height: 5px;
            display: block;
            background: white;
            margin: 8px 0;
        }
    }
`