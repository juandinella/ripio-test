import React from 'react';
import SVG from 'react-svg-inline';
import {tickerToLogo, tickerToName} from '../../utils'
import './index.scss';

const RateCard = ({ ticker, buy_rate, variation }) => {
  const roundedBuyRate = parseFloat(buy_rate).toFixed(2);
  return (
    <div className='rate-card flex flex-column justify-between'>
      <div>
        <div className='flex align-center'>
          <SVG svg={tickerToLogo[ticker]} />
          <div className='rate-card_ticker'>
            <span>{tickerToName[ticker]}</span>
          </div>
        </div>
        <div className='rate-card_amount'>$ {roundedBuyRate }</div>
      </div>
      <div className='rate-card_variation'>Últimas 24hs {variation} </div>
    </div>
  );
}
export default RateCard
