import React from 'react';
import './index.scss';

const RateCard = ({ ticker, buy_rate }) => (
  <div className="rate-card flex flex-column justify-between">
    <div>
      <div className='rate-card_ticker'>
        <span>{ticker}</span>
      </div>
      <div className='rate-card_amount'>$ {buy_rate}</div>
    </div>
    <div className='rate-card_variation'>Últimas 24hs</div>
  </div>
);

export default RateCard
