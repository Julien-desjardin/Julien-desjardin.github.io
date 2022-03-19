import React, {useState} from 'react';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo2048.svg'

import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#about'>About me</a></p>
  <p><a href='#formations'>Formations</a></p>
  <p><a href='#experiences'>Experiences</a></p>
  <p><a href='#projects'>Projects</a></p>
  </>
)

//BEM -> Block Elements Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className='portfolio__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='portfolio__navbar-contact'>
      <button type='button'>Contact</button>
      </div>
      <div className='portfolio__navbar-menu'>
        {toggleMenu
        ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu &&
        <div className='portfolio__navbar-menu_container scale-up-center'>
          <div className='portfolio__navbar-menu_container-links'>
            <Menu />
            <div className='portfolio__navbar-menu_container-links-contact'>
      <button type='button'>Contact</button> </div>
          </div>
        </div>
      }

      </div>
    </div>
  )
}

export default Navbar