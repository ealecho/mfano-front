import React from 'react'
import { Containa, Headline } from '../../styles/InsightsStyles'
import Insight from './Insight'


const Insights = ({articles}) => {
    console.log(articles);
    
    return (
        <Containa>
        <Headline>Insights</Headline>
        <span>

            {articles.edges.map(article => (
                 <Insight 
                 key={article.node.id} 
                 id={article.node.id} 
                 title={article.node.Title}
                 date={article.node.date} 
                 />
                 ))} 
        </span>
       
    </Containa>
    )
}

export default Insights
