import React from 'react'
import { Box, Name, Description } from '../../styles/serviceStyles'
const Service = ({name, description}) => {
    console.log(name);
    
    
    return (
         <Box>
            <Name>{name}</Name>
            <Description>{description}</Description>
        </Box>
       
       
    )
}

export default Service
