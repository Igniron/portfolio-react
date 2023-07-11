import React from 'react'
import { projects } from '../../assets/data/data.json'
import Slider from 'react-slick';

import './proyects.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Proyects = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slider",
    dots: true,
    infinite: true,
    centerMode:true,
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  
  return (

    <div className="projects">

      <h2 id="projects">Recent Projects</h2>

      <Slider {...settings}>
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

      </Slider>
      
    </div>

  )
}