import React, { useState, useEffect } from 'react';
import './index.scss';
import Rates from '../Rates'
import RateCard from '../RateCard'
import Wallets from "../Wallets";

const Main = () => {
  return (
    <main className="main">
      <Wallets />
    </main>
  );
}
export default Main
