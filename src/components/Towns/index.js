import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const TownBlock = styled.div`
    height: 200px;
    background-color: ${props => props.background};
    display: flex;
    align-items: flex-start;
    justify-content: start;
`

const Towns = () =>{
    const data = useStaticQuery(graphql`
    query Towns {
        allTownsJson {
          nodes {
            Background
            Objects
            TownName
          }
        }
      }
      `)

      const {nodes} = data.allTownsJson
      
      return (
          <div className = "towns">
            {nodes.map((el,index)=>{
                return (
                    <TownBlock><p>{el.TownName}</p></TownBlock> 
                )
                
            })}
          </div>
      )
}

export default Towns;