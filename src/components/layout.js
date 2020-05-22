import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import media from "styled-media-query";
import { normalize } from "styled-normalize"
import Header from "./Header"
import Footer from "./Footer"


const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
  
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  
  
}
body {
  font-size: 16px;
  font-family: 'Arimo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
  background-color:#F5F5F5;
}


h1,h2,h3,h4{
  font-weight: normal;
  line-height: 1.4em;
}
p{
  line-height: 1.4em;
  font-size: 2vh;
}
h1, h3{
  font-size: 1.2em;
}
h2{
  font-size: 5vw;
  font-weight: bold;
}
h4{
  font-size: 1.1em;
}
.leading{
  font-size: 1.1em;
}

`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <>
  <GlobalStyle />
    <Header/>
  <main>{children}</main>
  <Footer/>
  </>
  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
