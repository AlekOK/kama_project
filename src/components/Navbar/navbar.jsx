import React from 'react';
import sss from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={sss.nav}>
      <div className={sss.item}>
        <NavLink to="/profile" activeClassName={sss.activeLink}>Frofile</NavLink></div>
      <div className={`${sss.item} ${sss.active}`}>
        <NavLink to="/messages" activeClassName={sss.activeLink}>Messages</NavLink></div>
      <div className={sss.item}>
        <NavLink to="/news" activeClassName={sss.activeLink}>News</NavLink></div>
      <div className={sss.item}>
        <NavLink to="/music" activeClassName={sss.activeLink}>music</NavLink></div>
        <br></br>
      <div className={sss.item}>
        <NavLink to="/settings" activeClassName={sss.activeLink}>Settings</NavLink></div>
      <div className={sss.item}>
        <NavLink to="/users" activeClassName={sss.activeLink}>Users</NavLink></div>
    </nav>

  )
};

export default Navbar; 
