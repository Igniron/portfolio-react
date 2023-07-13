import React from 'react'
import { education } from '../../assets/data/data.json'

import './education.css'

export const Education = () => {


    
  return (
  <div className="education">
    <h2 id="education">Education</h2>

    <div className="education-cards">


    {
      education.map(data => (
        <div key={ data.id }>
          <h3>{ data.name }</h3> 
          <h5>{ data.title }</h5>
          <ul>
            <li>{ data.state }</li>
            <li>{ data.average }</li>
          </ul>
          <a href={ data.link } target="_blank">Learn more</a>
        </div>
      ))
    }
  </div>
  
</div>

  )
}
