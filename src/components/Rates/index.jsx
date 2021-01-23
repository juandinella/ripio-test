import React from 'react';
import './index.scss';

const Rates = () => (
  <div className="rates">
    <div className="rates-header flex align-center justify-between">
      <h2>Cotizaciones</h2>
      <a href="/" className="link"> Ver todas</a>
    </div>
    <div className="rates-cards flex">
      <div className="rateCard"></div>
      <div className="rateCard"></div>
      <div className="rateCard"></div>
      <div className="rateCard"></div>
      <div className="rateCard"></div>
    </div>
  </div>
);

export default Rates
