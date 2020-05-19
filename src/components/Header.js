import React from 'react'


//styled components
import {HeaderNav, Logo, Menu} from '../styles/HeaderStyles'
import { Link } from 'gatsby'
import { Container, Flex } from '../styles/globalStyles'

const Header = () => {
    return (
       <HeaderNav>
           <Container>
               <Flex spaceBetween noHeight>
           <Logo>
           <Link>
           mfano
           </Link>
           </Logo>

           <Menu>
               <button>
                   <span></span>
                   <span></span>
                   <span></span>
               </button>
           </Menu>
           </Flex>
           </Container>
       </HeaderNav>
    )
}

export default Header
