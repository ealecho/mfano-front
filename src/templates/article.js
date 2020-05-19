import React from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import {Headline,  Image, Paragraph2} from "../styles/articleStyles"

const article = ({data}) => {
    const {strapiArticles} = data
    console.log(strapiArticles)

    const ReactMarkdown = require('react-markdown')

    return (

 <Layout>
      <Headline>
        <h1>
        {strapiArticles.date}-{strapiArticles.author.username}
        </h1>
         <h2>{strapiArticles.Title}</h2>
         <Image>
           <Img fixed={strapiArticles.image.childImageSharp.fixed} />
         </Image>
      </Headline>
      <Paragraph2>
         <ReactMarkdown source={strapiArticles.content} />
      </Paragraph2>
  </Layout>
       
    )
}

export default article

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: {eq:$id}) {
      Title
      content
      date(fromNow: true)
      image {
        childImageSharp {
          fixed(width: 1400, height: 525) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`