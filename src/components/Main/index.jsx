import React, { useState, useEffect } from 'react';
import './index.scss';
import Rates from '../Rates'
import RateCard from '../RateCard'
import Wallets from "../Wallets";

const Main = () => {
  const [ rates, setRates ] = useState([]);

  useEffect(() => {
    fetch('https://dapp.ripio.com/api/v3/rates/?country=AR')
    .then(response => response.json())
    .then(data => setRates(data));
  }, [])
  console.log(rates)

  return (
    <main className="main">
      <Rates>
        {rates.map(item =>
          <RateCard key={item.ticker} {...item}/>
        )}
      </Rates>
      <Wallets />

    </main>
  );
}
export default Main
