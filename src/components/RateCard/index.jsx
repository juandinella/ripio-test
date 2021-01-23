import React from 'react';
import './index.scss';

const RateCard = ({ buy_rate }) => (
  <div className="rateCard">
    <div className='rateCard-amount'>{buy_rate}</div>
  </div>
);

export default RateCard
