import React, { useState, useEffect } from 'react';
import './index.scss';
import Rates from '../Rates'
import RateCard from '../RateCard'
import Wallets from '../Wallets';

const Main = () => {
  const [ rates, setRates ] = useState([]);
  const TICKERS_TO_DISPLAY = ['BTC_ARS', 'USDC_ARS', 'DAI_ARS', 'ETH_ARS'];

  useEffect(() => {
    fetch('https://dapp.ripio.com/api/v3/rates/?country=AR')
    .then(response => response.json())
    .then(data => setRates(data));
  }, [])
  console.log(rates)

  return (
    <main className='main'>
      <Rates>
        {rates
          .filter(item => TICKERS_TO_DISPLAY.includes(item.ticker))
          .map(item =>
            <RateCard key={item.ticker} {...item}/>
          )}
      </Rates>
      <Wallets />

    </main>
  );
}
export default Main
