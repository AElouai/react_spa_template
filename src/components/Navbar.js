import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({paths, isActive=false, clickHandler}) => (
<nav className="nav has-shadow">
    <div className="container">
        <div className="nav-left">
            <a className="nav-item">
                <img src="/one_punch.png" alt="One Punch logo"/> Anime
            </a>
            {
                paths.map((el,index)=>{
                    return <Link className="nav-item is-tab is-hidden-mobile " to={el} key={index}>{el}</Link>
                })
            }
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
            {
                paths.map((el,index)=>{
                    return <Link className="nav-item is-tab is-hidden-tablet" to={el} key={index}>{el}</Link>
                })
            }
            <a className="nav-item is-tab">Log out</a>
        </div>
    </div>
</nav>
);

export default Navbar;