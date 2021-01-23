import React from 'react';
import './index.scss';

const Sidebar = () => (
  <aside className='sidebar'>
    <div className="sidebar-header"></div>
    <nav>
      <ul>
        <li><a className='sidebar-item is-selected'href="">Panel</a></li>
        <li><a className='sidebar-item'href="">Cotizaciones</a></li>
        <li><a className='sidebar-item'href="">Launchpad</a></li>
        <li><a className='sidebar-item'href="">Referidos</a></li>
        <li><a className='sidebar-item'href="">Configuración</a></li>
      </ul>
      <ul>
        <li><a className='sidebar-item'href="">Exchange</a></li>
        <li><a className='sidebar-item'href="">Inversiones</a></li>
        <li><a className='sidebar-item'href="">Créditos</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar
