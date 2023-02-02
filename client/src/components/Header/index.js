import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen,} from 'react-icons/ai';
import { CgFileDocument, CgPhone } from "react-icons/cg";
import logo from "../../assets/logo.png"
import './header.css'

const Header = () => {
  return (
    <div className='paw__navbar'>
      <div className='paw__navbar-links'>
      <div className="paw__navbar-links_logo">
          <img src={logo} />
        </div>
        <div class="paw__searchbar">
          <input type="text" placeholder='Start typing your search..' />
        </div>
        <div className='pawNav'>
          <AiOutlineHome style={{color: 'black', marginTop: "5px"}} /><p><a href='/home'>Home</a></p>
          <AiOutlineUser style={{color: 'black', marginTop: "5px"}} /><p><a href='/palz'>Palz</a></p>
          <AiOutlineFundProjectionScreen style={{color: 'black', marginTop: "5px"}} /><p><a href='/recommendations'>Recommendations</a></p>
          <CgFileDocument style={{color: 'black', marginTop: "5px"}} /><p><a href='/account'>Account</a></p>
        </div>
      </div>
    </div>
  )
}

export default Header