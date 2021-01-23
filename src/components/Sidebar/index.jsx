import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.svg'

const Sidebar = () => (
  <aside className='sidebar'>
    <div className="sidebar-header flex align-center">
      <img src={logo} alt="Ripio Logo"/>
      <h1>Hola, <br/>Juan Manuel</h1>
    </div>
    <nav>
      <ul>
        <li className='flex align-center'><a className='sidebar-item is-selected'href="">Panel</a></li>
        <li className='flex align-center'><a className='sidebar-item'href="">Cotizaciones</a></li>
        <li className='flex align-center'><a className='sidebar-item'href="">Launchpad</a></li>
        <li className='flex align-center'><a className='sidebar-item'href="">Referidos</a></li>
        <li className='flex align-center'><a className='sidebar-item'href="">Configuración</a></li>
      </ul>
      <ul>
        <li className='flex align-center'><a className='sidebar-item'href="">Exchange</a></li>
        <li className='flex align-center'><a className='sidebar-item'href="">Inversiones</a><span className="tag">Nuevo!</span></li>
        <li className='flex align-center'><a className='sidebar-item'href="">Créditos</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar
