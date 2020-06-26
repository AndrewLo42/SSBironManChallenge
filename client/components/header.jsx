import React from 'react';
import { NavLink } from 'react-router-dom'
function Header() {
  return(
    <div className="row justify-content-between header-item">
      <div className="pl-3">
        <a href="/">
          <img src="./images/favicon.png" href="/" />
        </a>
      </div>
      <div></div>
      <div className="mr-3 dropdown-menu-head">
        <div className="drop-start">Start</div>
        <div className="menu-content">
         <a className="header-link" href="/melee-ironman">Melee</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
