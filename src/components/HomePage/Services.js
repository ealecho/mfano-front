import React from 'react'
import { Containa, Headline } from '../../styles/servicesStyles'
import Service from './Service'


const Services = ({services}) => {
  console.log(services.edges);
  
    
    return (
        <Containa>
            <Headline>Our Services</Headline>
            <div>
           {services.edges.map(service => (
                    
                    <Service  key={service.node.id} name={service.node.name} description={service.node.description} />

                    ))}
            </div>
           
        </Containa>
    )
}

export default Services

