import React from 'react'
import { Date, Title, Wrapper } from '../../styles/InsightStyles'
import { Link } from 'gatsby'

const Insight = ({title, date, id}) => {
    console.log(id);
    

    return (
        <Link to={`/${id}`} style={{ color: 'white' }}>
        <Wrapper>
            <Date>{date}</Date>
            <Title>{title}</Title> 
        </Wrapper>
        </Link>
    )
}

export default Insight
