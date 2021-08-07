import React from 'react';
import { Link } from 'react-router-dom';
import './NavBanner.scss';


const NavBanner = () => {
  return (
    <div className="header">
      <div className="headerSection">
        <div className="headerSection__bg"></div>
        <h1 className="headerSection__title">Sembremos futuro</h1>
      </div>
    </div>
  );
};

export default NavBanner;