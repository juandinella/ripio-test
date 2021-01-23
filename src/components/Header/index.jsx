import React from 'react';
import './index.scss';
import SVG from 'react-svg-inline';
import bell from '../Icons/bell.svg';
import help from '../Icons/help.svg';

const Header = () => (
  <header className="header">
    <div className="header-top flex justify-between">
      <div className='flex align-center'>
        <button className="menu-toggle db dn-md">
          <div className="menu-toggle_line"></div>
          <div className="menu-toggle_line"></div>
          <div className="menu-toggle_line"></div>
        </button>
        <div className="section-name">Panel</div>
      </div>
      <div className="header-icons flex align-center">
        <a className="notification relative" href='/'>
          <div className="notification-dot absolute flex align-center justify-center">6</div>
          <SVG svg={ bell } className='notification' />
        </a>
        <a href="" className="header-help"><SVG svg={ help } /></a>
      </div>
    </div>
    <div className='flex justify-between'>
      <div className='header-balance'>
        <div className="header-balance_label">Balance total</div>
        <div className="header-balance_total dib">$0</div>
        <a href="/" className="link">Ver detalle</a>
      </div>
    </div>
  </header>
);

export default Header
