import React from 'react'


//styled components
import {HeaderNav, Nav, Logo, Menu} from '../styles/HeaderStyles'
import { Link } from 'gatsby'
import { Container, Flex } from '../styles/globalStyles'

const Header = () => {
    return (
       <HeaderNav>
           <Container>
            <Nav>
               <Flex spaceBetween noHeight>
                   <Logo>
                      <Link> mfano</Link>
                   </Logo>
                <Menu>
                 <button>
                   <span></span>
                   <span></span>
                   <span></span>
                </button>
               </Menu>
              </Flex>
           </Nav>
           </Container>
       </HeaderNav>
    )
}

export default Header
