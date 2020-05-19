import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/HomePage/HomeBanner"
import {graphql } from "gatsby"
import Services from "../components/HomePage/Services"
import Insights from "../components/HomePage/Insights"

const IndexPage = ({ data }) => {
  let {allStrapiArticles, allStrapiServices} = data
  
  
  return <Layout>

    <HomeBanner />
    <Services services={allStrapiServices} />
    <Insights articles={allStrapiArticles}/>
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allStrapiServices {
    edges {
      node {
        id
        name
        description
      }
    }
  }
  allStrapiArticles {
    edges {
      node {
        id
        Title
        content
        date(fromNow: true)
      }
    }
  }
}
`
