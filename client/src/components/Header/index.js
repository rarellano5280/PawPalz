import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser,} from 'react-icons/ai';
import { ImMap2 } from "react-icons/im";
import { TbPaw } from "react-icons/tb";
import logo from "../../assets/logo.png"

import './header.css'

const Header = () => {
  return (
    <div className="paw__navbar">
      <div className="paw__navbar-links">
        <div className="paw__navbar-links_logo">
          <img src={logo} />
        </div>
        <h3 class="paw__title">Paw Palz</h3>
        <div class="paw__searchbar">
          <input type="text" placeholder="Start typing your search.." />
        </div>
        <div className='pawNav'>
        <NavLink to="/" className='paw__navbar-link-icons'>{AiOutlineHome}</NavLink>
        <NavLink to="/palz" className='paw__navbar-link-icons'>{TbPaw}</NavLink>
        <NavLink to="/walks" className='paw__navbar-link-icons'>{ImMap2}</NavLink>
        <NavLink to="/account" className='paw__navbar-link-icons'>{AiOutlineUser}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
