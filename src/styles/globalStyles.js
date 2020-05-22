import styled, { css } from 'styled-components'

export const Container =  styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr)
    
`

export const Flex =  styled.div`
    position: relative;
    display: flex;
    align-items: center;

    ${props => props.spaceBetween &&
    css`
    justify-content: space-between;
    ` }

    ${props => props.flexEnd &&
    css`
    justify-content: flex-end;
    ` }

    ${props => props.alignTop &&
    css`
    align-items: top;
    ` }

    ${props => props.noHEIGHT &&
    css`
    height: 0;
    ` }
`