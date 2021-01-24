import React from 'react';
import './index.scss';
import classNames from 'classnames'
import Button from '../Button'
import SVG from 'react-svg-inline';
import bell from '../../assets/Icons/bell.svg';
import help from '../../assets/Icons/help.svg';

const Header = ({ openMenu, onClickOpenMenu }) => {
  return (
    <header className='header'>
      <div className='header-top flex justify-between'>
        <div className='flex align-center'>
          <button
            className={classNames('menu-toggle db dn-md', openMenu ? 'is-open': '')}
            onClick={onClickOpenMenu}
          >
            <div className='menu-toggle_line'></div>
            <div className='menu-toggle_line'></div>
            <div className='menu-toggle_line'></div>
            <div className="visuallyHidden">Toggle Menu</div>
          </button>
          <div className='section-name'>Panel</div>
        </div>
        <div className='header-icons flex align-center'>
          <a className='notification relative' href='/'>
            <div className='notification-dot absolute flex align-center justify-center'>6</div>
            <SVG svg={ bell } className='notification' />
          </a>
          <a href='/' className='header-help'><SVG svg={ help } /></a>
        </div>
      </div>
      <div className='db flex-sm justify-between align-end'>
        <div className='header-balance'>
          <div className='header-balance_label'>Balance total</div>
          <div className='header-balance_total dib'>$0</div>
          <a href='/' className='link'>Ver detalle</a>
        </div>
        <div className='header-buttons flex justify-center'>
          <Button link='/' variant='btn--primary' size='btn--big'>Depositar</Button>
          <Button link='/' variant='btn--secondary' size='btn--big'>Retirar</Button>
        </div>
      </div>
    </header>
  );
}

export default Header
