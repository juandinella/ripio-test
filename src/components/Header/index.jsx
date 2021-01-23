import React from 'react';
import './index.scss';

const Header = () => (
  <header className="header">
    <div className="header-top flex justify-between">
      <div className="section-name">Panel</div>
      <div className="header-icons">A B</div>
    </div>
    <div className='flex justify-between'>
      <div className='header-balance'>
        <div className="header-balance_label">Balance total</div>
        <div className="header-balance_total dib">$0</div>
        <a href="" className="link">Ver detalle</a>
      </div>
    </div>
  </header>
);

export default Header
