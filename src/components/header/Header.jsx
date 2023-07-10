import React from 'react'
import { header } from '../../assets/data/data.json'

import './header.css'

export const Header = () => {

    
  return (
    <header>
      <div className="conteiner-left">

      <div className="conteiner-left-top">
        <p>Hello, i'm</p>
        <p>{ header.name }</p>
        <p>{ header.profession }</p>
        <p>{ header.description }</p>
      </div>

      <div className="conteiner-left-bottom">
        <a href="#education">Let's start</a>
      </div>
      </div>

      <div className="conteiner-right">
        <img src={ header.img } alt="" />
      </div>
    </header>
  )
}
