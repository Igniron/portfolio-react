import React from 'react'
import { projects } from '../../assets/data/data.json'

import './proyects.css'

export const Proyects = () => {



  
  return (
  <div className="projects">

    <h2 id="projects">Recent Projects</h2>

    <div className="projects-conteiner">

      {
        projects.map( data => (
          <React.Fragment key={ data.id }>
            <a href={ data.link } target="_blank" className="project-card">
              <h3 className='project-title'>{ data.title }</h3>
              <img className='photo' src={ data.img } alt="" />
              <p className='project-text'>{ data.description }</p>
            </a>
          </React.Fragment>
        ))
      }


    </div>
    
  </div>

  )
}
