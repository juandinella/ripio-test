import React from 'react';
import './styles.scss';

const Rates = ({ children }) => (
  <div className='rates'>
    <div className='rates-header flex align-center justify-between'>
      <h2>Cotizaciones</h2>
      <a href='/' className='link'> Ver todas</a>
    </div>
    <div className='rates-cards flex'>
      { children }
    </div>
  </div>
);

export default Rates
