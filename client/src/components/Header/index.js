import React from 'react';
import { AiOutlineHome, AiOutlineHeart} from 'react-icons/ai';
import { ImMap2 } from "react-icons/im";
import { GrUserSettings } from "react-icons/gr";
import logo from "../../assets/logo.png"
import './header.css'

const Header = () => {
  return (
    <div className='paw__navbar'>
      <div className='paw__navbar-links'>
      <div className="paw__navbar-links_logo">
          <img src={logo} />
        </div>
        <h3 class='paw__title'>Paw Palz</h3>
        <div class="paw__searchbar">
          <input type="text" placeholder='Start typing your search..' />
        </div>
        <div className='pawNav'>
        <li className='paw__navbar-link-icons'>
              <a
              href='/'
              className='icon-color'>
              < AiOutlineHome size={25}/>
              </a>
            </li>

            <li className='paw__navbar-link-icons'>
              <a
              href='/palz'
              className='icon-color'>
              < AiOutlineHeart size={25}/>
              </a>
            </li>

            <li className='paw__navbar-link-icons'>
              <a
              href='/walks'
              className='icon-color'>
              < ImMap2 size={25}/>
              </a>
            </li>
            <li className='paw__navbar-link-icons'>
              <a
              href='/account'
              className='icon-color'>
              < GrUserSettings size={25}/>
              </a>
            </li>
        </div>
      </div>
    </div>
  )
}

export default Header