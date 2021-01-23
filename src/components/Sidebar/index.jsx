import React from 'react';
import './index.scss';
import SVG from 'react-svg-inline';
import logo from '../Icons/logo.svg';
import inicio from '../Icons/inicio.svg';
import wallet from '../Icons/wallet.svg';
import launchpad from '../Icons/launchpad.svg';
import referidos from '../Icons/referidos.svg';
import config from '../Icons/config.svg';
import exchange from '../Icons/exchange.svg';
import inversiones from '../Icons/inversiones.svg';
import creditos from '../Icons/creditos.svg';


const Sidebar = () => (
  <aside className='sidebar'>
    <div className="sidebar-header flex align-center">
      {/* <img src={logo} alt="Ripio Logo"/> */}
      <div className="sidebar-header_logo flex align-center justify-center">
        <SVG svg={ logo } />
      </div>
      <h1>Hola, <br/>Juan Manuel!</h1>
    </div>
    <nav>
      <ul>
        <li className='flex align-center'>
          <a className='sidebar-item is-active flex' href="/">
            <SVG svg={ inicio } className='sidebar-item_icon flex align-center' />
            <span>Panel</span>
          </a>
        </li>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ wallet } className='sidebar-item_icon flex align-center' />
            <span>Cotizaciones</span>
          </a>
        </li>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ launchpad } className='sidebar-item_icon flex align-center' />
            <span>Launchpad</span>
          </a>
        </li>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ referidos } className='sidebar-item_icon flex align-center' />
            <span>Referidos</span>
          </a>
        </li>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ config } className='sidebar-item_icon flex align-center' />
            <span>Configuración</span>
          </a>
        </li>
      </ul>
      </nav>
      <nav className='sidebar-products'>
        <div className='sidebar-products_title'>Productos</div>
      <ul>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ exchange } className='sidebar-item_icon flex align-center' />
            <span>Exchange</span>
          </a>
        </li>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ inversiones } className='sidebar-item_icon flex align-center' />
            <span>Inversiones</span></a><span className="tag">Nuevo!</span>
        </li>
        <li className='flex align-center'>
          <a className='sidebar-item flex' href="/">
            <SVG svg={ creditos } className='sidebar-item_icon flex align-center' />
            <span>Créditos</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar
